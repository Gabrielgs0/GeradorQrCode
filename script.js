function GerarQrCode(){
    var InputUsuario = document.querySelector("textarea").value
    var GoogleChartApi = "https://chart.googleapis.com/chart?cht=qr&chs=400x400&chld=H&chl="
    var ContentQRCode = GoogleChartApi + encodeURIComponent(InputUsuario)
    document.querySelector("#qr-code-img").src = ContentQRCode
}

