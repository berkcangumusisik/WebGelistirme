# LİSTELER 
## 1. SIRASIZ LİSTE
- Sırasız listeler ```<ul></ul>``` etiketi ile oluşturulur.
- Alt elemanları  ``` <li></li> ``` etiketi ile yazılır. Bu sayede sırasız listeleme işlemi yapılır.
-  ```<li><p></p></li> ``` şeklinde kullanılırsa üstten ve alttan boşluk bırakır.
- ```<ul></ul>``` etiketi içerisinde ```<li></li>``` elemanlarının içinde ```<ul></ul>``` kullanarak iç içe liste oluşturmak mümkündür.

```
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
        <li>
            Sebze
            <ul>
                <li>Biber
                    <ul>
                    <li>Yeşil Biber</li>
                    <li>Kırmızı Biber</li>
                    </ul>
                </li>

            </ul>
        </li>
    </ul>
```

![image](https://user-images.githubusercontent.com/75336900/125461412-ed82dc9d-38ee-4b39-8308-447d052b1e30.png)

## 2. SIRALI LİSTE
- Sıralı listeler ```<ol></ol>``` etiketi ile oluşturulur.
- Alt elemanları  ``` <li></li> ``` etiketi ile yazılır. Bu sayede sıralı listeleme işlemi yapılır.
-  ```<li><p></p></li> ``` şeklinde kullanılırsa üstten ve alttan boşluk bırakır.
- ```<ol></ol>``` etiketi içerisinde ```<li></li>``` elemanlarının içinde ```<ol></oll>``` kullanarak iç içe liste oluşturmak mümkündür.
- ```<ol></ol>``` etiketine type="" vererek büyük harf, küçük harf ve roma rakamları şeklinde gösterimi de mümkündür.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sıralı Listeler</title>
</head>
<body>
    <h2>Alışveriş Listesi</h2>
    <ol>
        <li>Yumurta</li>
        <li>Ekmek
        <ol>
            <li><p>Kepek Ekmek </p></li>
            <li><p>Çavdar Ekmek</p></li>
            <li><p>Normal Ekmek</p></li>
        </ol>
        </li>
        <li>
            Sebze
            <ol>
                <li>Biber
                    <ul>
                    <li>Yeşil Biber</li>
                    <li>Kırmızı Biber</li>
                    </ul>
                </li>

            </ol>
        </li>
    </ol>


    <p>Büyük Harf</p>
    <ol type="A">
        <li>1. Satır</li>
        <li>2. Satır</li>
    </ol>
    <p>Küçük Harf</p>
    <ol type="a">
        <li>1. Satır</li>
        <li>2. Satır</li>
    </ol>
    <p>Büyük Roma Rakamı</p>
    <ol type="I">
        <li>1. Satır</li>
        <li>2. Satır</li>
    </ol>
    <p>Küçük Roma Rakamı</p>
    <ol type="i">
        <li>1. Satır</li>
        <li>2. Satır</li>
    </ol>
</body>
</html>

```

![image](https://user-images.githubusercontent.com/75336900/125471075-2cab34e7-5dfd-4cd8-b982-6205aab0386d.png)

