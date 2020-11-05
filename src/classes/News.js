export default function News(data) {
    this.name = data["name"];
    this.partner = data["partner"];
    this.description = data["description"];
    this.link = data["link"];
    this.pathImg = "./img/" + data["img"]; // ссылка на логотип
}