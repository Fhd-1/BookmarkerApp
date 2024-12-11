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

if (!empty($data->title) && !empty($data->link)) {
    $bookmark->setTitle($data->title);
    $bookmark->setLink($data->link);

    if ($bookmark->create()) {
        echo json_encode(["message" => "Bookmark created successfully."]);
    } else {
        echo json_encode(["message" => "Failed to create bookmark."]);
    }
} else {
    echo json_encode(["message" => "Invalid input. Title and link are required."]);
}

?>
