<h2> Web card </h2>

Web card is really basic website (portfolio card) where you can substitute your data in data.js file and thanks for it you can create your own business card.
https://user-images.githubusercontent.com/59035908/91284116-c7fdf080-e78b-11ea-982b-d58598a6e921.png

### Technologies

Languages and frameworks:

- Java Script
- HTML 5
- React.js
- React Bootstrap 4.5 v1.3.0
- Atomic Design Structure

### Code

- Create small components (atoms) which can be reusable and expanded for new features

```javascript
<WebButton
content={<IoMdClose className="galleryModal__icon__close" />}
btnFunction={handleGalleryModalClose}
className={'closeModalButton'}
/>
}
```

- Use axios for asynchronous actions

```javascript
const getPhotoData = () => {
axios
.get('https://picsum.photos/v2/list?limit=10')
.then((res) => {
return setPhotos([...res.data]);
})
.catch((error) => console.log(error));
}}
```

- Use react-hook

````javascript
useEffect(() => {
getPhotoData();
}, []);```
````

To run this project, install it locally using :

```
$ cd ../lorem
$ npm install
$ npm start
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```
