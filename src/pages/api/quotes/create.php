<?php
// --- CORS Configuration ---

// Allow requests from your frontend domain
header("Access-Control-Allow-Origin: https://www.moemoeenterprise.com");
// Allow specific HTTP methods
header("Access-Control-Allow-Methods: POST, OPTIONS");
// Allow specific headers, including Content-Type
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // End script execution for preflight requests
    exit(0);
}


// --- API Logic ---

// Set the content type to JSON
header('Content-Type: application/json');

// --- Security & Best Practices: Database credentials are NOT here ---
// All database persistence is handled by this API layer.
// The React app never has access to database credentials.


// Function to generate a unique reference
function generate_quote_ref() {
    return 'MM-' . time() . '-' . mt_rand(100, 999);
}


// Read the incoming JSON payload
$input = file_get_contents('php://input');
$data = json_decode($input, true);

$response = [
    'success' => false,
    'message' => 'An unknown error occurred.'
];

// --- Security: Honeypot Check ---
// If the hidden 'honeypot' field is filled out, it's likely a bot.
if (!empty($data['honeypot'])) {
    // You can silently fail or log this attempt
    // For now, we'll return a generic success to not alert the bot
    $response['success'] = true;
    $response['message'] = 'Your request has been received.';
    $response['quote_ref'] = generate_quote_ref(); // Provide a fake ref
    echo json_encode($response);
    exit;
}


// --- Validation ---
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400); // Bad Request
    $response['message'] = 'Invalid JSON payload.';
    echo json_encode($response);
    exit;
}

$service_type = $data['service_type'] ?? null;
$name = $data['name'] ?? null;
$phone = $data['phone'] ?? null;
$email = $data['email'] ?? null;
$details = $data['details'] ?? null;

if (!$name || !$phone || !$email || !$details || !in_array($service_type, ['cleaning', 'courier'])) {
    http_response_code(400); // Bad Request
    $response['message'] = 'Missing or invalid required fields.';
    echo json_encode($response);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    $response['message'] = 'Invalid email format.';
    echo json_encode($response);
    exit;
}

// --- Persistence Logic ---
// This is where you would save the data to your database.
// For this example, we will simulate success.

// Example:
/*
try {
    $pdo = new PDO('mysql:host=your_db_host;dbname=your_db_name', 'your_db_user', 'your_db_password');
    $stmt = $pdo->prepare(
        "INSERT INTO quotes (service_type, name, phone, email, details, quote_ref) VALUES (?, ?, ?, ?, ?, ?)"
    );
    $quote_ref = generate_quote_ref();
    $stmt->execute([$service_type, $name, $phone, $email, $details, $quote_ref]);

    // Send email to admin here
    $admin_email = "info@moemoeenterprise.com";
    $subject = "New Quote Request from " . $name;
    $body = "A new quote request has been submitted:\n\n" .
            "Name: " . $name . "\n" .
            "Email: " . $email . "\n" .
            "Phone: " . $phone . "\n" .
            "Service: " . $service_type . "\n" .
            "Details: " . $details;
    mail($admin_email, $subject, $body);

    $response['success'] = true;
    $response['message'] = 'Quote request submitted successfully.';
    $response['quote_ref'] = $quote_ref;

} catch (PDOException $e) {
    http_response_code(500); // Internal Server Error
    $response['message'] = 'Database error: ' . $e->getMessage();
}
*/


// --- Simulated Success Response ---
// For demonstration, we'll bypass DB and email to always return success
$response['success'] = true;
$response['message'] = 'Quote request submitted successfully.';
$response['quote_ref'] = generate_quote_ref();


// Return the JSON response
http_response_code(200); // OK
echo json_encode($response);
?>
