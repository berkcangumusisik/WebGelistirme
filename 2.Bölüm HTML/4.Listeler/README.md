# LİSTELER 
## 1. SIRASIZ LİSTE
- Sırasız listeler ```<ul></ul>``` etiketi ile oluşturulur.
- Alt elemanları  ``` <li></li> ``` etiketi ile yazılır. Bu sayede sırasız listeleme işlemi yapılır.
-  ```<li><p></p></li> ``` şeklinde kullanılırsa üstten ve alttan boşluk bırakır.
- ```<ul></ul>``` etiketi içerisinde ```<li></li>``` elemanlarının içinde ```<ul></ul>``` kullanarak iç içe liste oluşturmak mümkündür.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sırasız Listeler</title>
</head>
<body>
    <h2>Alışveriş Listesi</h2>
    <ul>
        <li>Yumurta</li>
        <li>Ekmek
        <ul>
            <li><p>Kepek Ekmek </p></li>
            <li><p>Çavdar Ekmek</p></li>
            <li><p>Normal Ekmek</p></li>
        </ul>
        </li>
    </ul>
</body>
</html>
```

<br>
