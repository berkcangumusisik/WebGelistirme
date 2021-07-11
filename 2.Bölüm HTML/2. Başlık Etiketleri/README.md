# HTML BAŞLIK ETİKETİ
- Başlık etiketleri h1'den h6'ya kadar gitmektedir.
- h1 en büyük başlıktır h6 ise en küçük başlıktır.
- h1'den h6'ya gidildikçe başlık puntosu küçülmektedir.
- h1 en üst seviye başlıktır ve 1 defa kullanılması gerekir.
- h2 en fazla 3 kez kullanılır.
- h3 en fazla 3 defa kullanılır.
- ```<body></body>``` etiketi içerisine yazılır.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Başlık Etiketleri</title>
</head>
<body>
    <h1>En üst seviye başlık 1 kez kullanılır.</h1>
    <h2>En üst seviye başlık En fazla 3 defa kullanılır.</h2>
    <h3>En üst seviye başlık En fazla 3 defa kullanılır.</h3>
    <h4>Daha düşük seviye başlık</h4>
    <h5>Daha da düşük seviye başlık</h5>
    <h6>En düşük seviye başlık</h6>

</body>
</html>
```
Yukarıdaki kodumuzun çıktısı aşağıdaki gibi olacaktır.
![image](https://user-images.githubusercontent.com/75336900/125196419-8ae70380-e262-11eb-95a0-fbfddd30efed.png)

# PARAGRAF ETİKETİ
- ```<body></body>``` içersine yazılır.
- ```<p></p>``` etiketleri içine yazılır.
- Paragraf oluşturulurken kullanılır.
- p etiketi kullanılmadan da metinleri yazabiliriz. Ama her paragrafta bir ```<br/>``` etiketi kullanılması gerekir.
- ```<p></p>``` etiketleri arasına yazmak ileride web sayfamıza CSS verirken tasarımsal açıdan kolaylık sağlayacaktır.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paragraf Etiketi</title>
</head>
<body>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ducimus inventore quos odit voluptatibus deserunt error! Odio in laboriosam vel fuga, at iusto ab tempora doloribus praesentium totam recusandae asperiores!
    <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat doloremque deleniti omnis reiciendis assumenda, iusto perspiciatis voluptatibus maxime corrupti molestiae, sint incidunt, ab harum! Incidunt excepturi impedit iure cum.
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat unde explicabo nulla? Perferendis repellat accusantium, iusto vitae ratione placeat doloribus cumque incidunt! Praesentium porro enim aliquid ratione alias totam dolore.
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis necessitatibus fuga quo nihil eligendi ratione, ea fugit iusto pariatur ad rem explicabo, voluptate vitae dolore, laboriosam nobis autem nisi.
    </p>
</body>
</html>
```
![image](https://user-images.githubusercontent.com/75336900/125196869-2dec4d00-e264-11eb-9469-6f134d8653b7.png)
