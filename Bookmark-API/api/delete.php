<?php

header("Access-Control-Allow-Origin: http://localhost:3001");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

header("Content-Type: application/json");
require_once "../db/Database.php";
require_once "../models/Bookmark.php";

$dbConnection = (new Database())->connect();
$bookmark = new Bookmark($dbConnection);

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->id)) {
    $bookmark->setId($data->id);

    if ($bookmark->delete()) {
        echo json_encode(["message" => "Bookmark deleted successfully."]);
    } else {
        echo json_encode(["message" => "Failed to delete bookmark."]);
    }
} else {
    echo json_encode(["message" => "Invalid input. ID is required."]);
}

?>
