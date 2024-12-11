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

    if ($bookmark->readOne()) {
        echo json_encode([
            "id" => $bookmark->getId(),
            "title" => $bookmark->getTitle(),
            "link" => $bookmark->getLink(),
            "date_added" => $bookmark->getDateAdded()
        ]);
    } else {
        echo json_encode(["message" => "Bookmark not found."]);
    }
} else {
    echo json_encode(["message" => "Invalid input. ID is required."]);
}

?>
