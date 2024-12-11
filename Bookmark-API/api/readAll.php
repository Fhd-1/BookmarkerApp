<?php

header("Access-Control-Allow-Origin: http://localhost:3001");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

header("Content-Type: application/json");
require_once "../db/Database.php";
require_once "../models/Bookmark.php";

$dbConnection = (new Database())->connect();
$bookmark = new Bookmark($dbConnection);

$result = $bookmark->readAll();

if (count($result) > 0) {
    echo json_encode($result);
} else {
    echo json_encode(["message" => "No bookmarks found."]);
}

?>
