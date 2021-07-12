require "rqrcode"

#color = ARGV[1] ? "##{ARGV[1]}" : "black"

url = ARGV[0]
color = ARGV[1] ? ARGV[1] : "black"
background = ARGV[2] ? ARGV[2] : "white"
name = ARGV[3] ? ARGV[3] : "qrcode.png"

qrcode = RQRCode::QRCode.new(url)
png = qrcode.as_png(
  color: color,
  fill: background,
  size: 120
)

IO.binwrite(name, png.to_s)