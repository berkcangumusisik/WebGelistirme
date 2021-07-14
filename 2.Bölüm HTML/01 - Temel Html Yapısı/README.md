# HTML
-  HTML, Hyper Text Markup Language kelimelerinin kısaltılmışıdır.
-  HTML komutları, metin, resim, ses, video gibi içeriklerin sayfadaki yerleşimini ve ziyaretçiye gösterilmesini sağlar.
-  HTML sayfalarının dosya uzantısı .htm veya .html’dir.
-  HTML dili 1980 yılında CERN laboratuvarlarında görevli olan Tim Berners-Lee tarafından geliştirilmiştir.

## HTML DOSYASI OLUŞTURURKEN DİKKAT EDİLMESİ GEREKENLER
- HTML sayfası isimlendirilirken Türkçe karakterlere yer verilmez.
- HTML sayfası isimlendirilirken boşluklara yer verilmez. Her kelime arasına - konularak yazılabilir.

## TEMEL HTML KOMUTLARI
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Başlık</title>
</head>
<body>
    <p>Asıl içeriğin oluşturulduğu kısımdır.</p>
</body>
</html>
```

```
- <!DOCTYPE HTML> :Sayfanın HTML5 ile tasarlandığını belirtir. Sayfanın en başında bulunur.
- <html></html>:Sayfanın başlangıcını ve sonunu belirtir.
- <head></head>:Sunucu ve arama motorları ile ilgili bilgileri içerir.
- <body></body>:Ziyaretçiye gösterilecek içeriği barındırır.
- <title></title>:Sayfa ile ilgili açıklama barındırır. Sayfa açıldığında tarayıcı sekmesinde görünür.
- <html lang= “tr”> :Sayfanın dilini belirtir. Türkçe sayfalarda “tr” kullanılırken, İngilizce sayfalarda “en” kullanılır. 
<html> tagının bir özelliğidir.Yani, ayrı bir komut değildir.
- <meta charset="utf-8">:Türkçe karakterlerin düzgün görünmesini sağlar. <head> tagı içine yazılmalıdır.
```

## META ETİKETLERİ
- Meta etiketlerinin asıl görevi arama çubuğunda kullanıcılar arama yaptıkları zaman SEO skorlarına göre öncelikli gösterilmeyi sağlarlar. 
- Head etiketi içerisinde yer alırlar.
```
  <meta name="title" content="Halı Yıkama Fabrikası"> : sayfa başlığına uygun veri girişi yapılır
  <meta name="keywords" content="halı yıkama, uygun fiyat"> : sitenin anahtar kelimelerine yer verilir.
  <meta name="description" content="7/24 halı yıkama "> : sayfanın kısa bir özeti yer alır.
  <meta name="author" content="Berkcan Gümüşışık">: sayfa yazarını belirtir.
    
```

## YORUM SATIRLARI
```
<!--Bu bir yorum satırıdır.-->
```
