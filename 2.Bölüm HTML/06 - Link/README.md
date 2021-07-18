# LİNK VERME

- HTML Sayfaları arasında geçişi sağlar.
- ```<body></body>``` etiketi içerisine  ```<a></a>``` etiketinde yazılır.
- a etiketi içine href eklenerek gidilecek olan link ya da html safasnının adı verilir.
- a etiketinden sonra ```<br>``` etiketi konulursa bir alt satırdan başlarlar.
- Resme de link verilebilir.
- Rar içindeki uygulamalara link vererek indirme işlemi yapılabilir.
- Resme tıklayarak farklı sayfaya yönlendirme işlemi yapılabilir.
- Farklı sekmede açmak için ```target="_blank"``` verilebilir.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Link İşlemleri</title>
</head>
<body>
    <a id="images" href="02-images.html"> Resimler</a>
    <br/>
    <a href="https://www.google.com/">Google</a>
    <br>
    <a href="fred.png">Fred</a>
    <br>
    <a href="Link.rar">İndir</a>
    <br>
    <a href="02-images.html" target="_blank">
        <img src="fred.png">
    </a>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo repellendus officiis harum. Blanditiis veritatis impedit odit repellendus libero sapiente molestiae autem possimus aut, architecto ipsa quis assumenda laboriosam corrupti!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo repellendus officiis harum. Blanditiis veritatis impedit odit repellendus libero sapiente molestiae autem possimus aut, architecto ipsa quis assumenda laboriosam corrupti!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo repellendus officiis harum. Blanditiis veritatis impedit odit repellendus libero sapiente molestiae autem possimus aut, architecto ipsa quis assumenda laboriosam corrupti!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo repellendus officiis harum. Blanditiis veritatis impedit odit repellendus libero sapiente molestiae autem possimus aut, architecto ipsa quis assumenda laboriosam corrupti!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo repellendus officiis harum. Blanditiis veritatis impedit odit repellendus libero sapiente molestiae autem possimus aut, architecto ipsa quis assumenda laboriosam corrupti!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo repellendus officiis harum. Blanditiis veritatis impedit odit repellendus libero sapiente molestiae autem possimus aut, architecto ipsa quis assumenda laboriosam corrupti!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo repellendus officiis harum. Blanditiis veritatis impedit odit repellendus libero sapiente molestiae autem possimus aut, architecto ipsa quis assumenda laboriosam corrupti!
    </p>
    <a href="#images">Başa Dön</a>
</body>
</html>
```
