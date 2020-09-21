const path = `http://localhost:1337/`;
try {
    fetch(path).then(rawData => rawData.json()).then(data => new gridjs.Grid({
        columns: ["DATE-TIME", "FILE", "TIME-REQUIRED", "%COMPLETED"],
        search: true,
        data: data,
    }).render(document.getElementById("wrapper")));
} catch (error) {
    console.log(error);
}