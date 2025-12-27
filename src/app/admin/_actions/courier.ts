
"use server";

import { cookies } from 'next/headers';
import type { CourierOp } from '../courier/page';

interface ApiResponse {
    success: boolean;
    operations?: CourierOp[];
    message?: string;
}

export async function getCourierOps(): Promise<ApiResponse> {
    const cookieStore = cookies();
    const token = cookieStore.get('auth_token');

    if (!token) {
        return { success: false, message: 'Unauthorized: No token found' };
    }
    
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courier/list.php`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token.value}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            // We are returning a 200 response with success: false on purpose to not trigger error boundaries
             return { success: false, message: errorData?.message || `Failed to fetch courier operations. Status: ${response.status}` };
        }

        const data = await response.json();
        return data;

    } catch (e: any) {
        return { success: false, message: e.message || 'An unexpected error occurred.' };
    }
}
