import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

	@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');
	@import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v26.0.2/dist/font-face.css');
	
	html {
		height: 100%;
	}

	body {
		font-family: 'Vazir', sans-serif !important;
	}

  /* ##Device = Desktops ##Screen = 1281px to higher resolution desktops */
 @media (min-width: 1281px) {
	 body {
		 background-image: url('https://source.unsplash.com/1600x900/?art,design,minimal');
		 background-position: top;
		 background-repeat: no-repeat;
		 background-size: cover;
		 left: 0;
		 position: absolute;
		 right: 0;
		 top: 0;
	}
	 .navbar {
		 background-color: transparent !important;
	}
}
/* ##Device = Laptops, Desktops ##Screen = B/w 1025px to 1280px */
 @media (min-width: 1025px) and (max-width: 1280px) {
	/* CSS */
	 body {
		 background-image: url('https://source.unsplash.com/1600x900/?art,design,minimal');
		 background-position: top;
		 background-repeat: no-repeat;
		 background-size: cover;
		 left: 0;
		 position: absolute;
		 right: 0;
		 top: 0;
	}
	 .navbar {
		 background-color: transparent !important;
	}
}
/* ##Device = Tablets, Ipads (portrait) ##Screen = B/w 768px to 1024px */
 @media (min-width: 768px) and (max-width: 1024px) {
	 body {
		 background-image: url('https://source.unsplash.com/1600x900/?art,design,minimal');
		 background-position: top;
		 background-repeat: no-repeat;
		 background-size: cover;
		 left: 0;
		 position: absolute;
		 right: 0;
		 top: 0;
	}
}
/* ##Device = Tablets, Ipads (landscape) ##Screen = B/w 768px to 1024px */
 @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
	/* CSS */
}
/* ##Device = Low Resolution Tablets, Mobiles (Landscape) ##Screen = B/w 481px to 767px */
 @media (min-width: 481px) and (max-width: 767px) {
	/* CSS */
	 body {
		 /* background-image: url('https://source.unsplash.com/1600x900/?art,design,minimal'); */
		 /* background-position: top; */
		 background-repeat: no-repeat;
		 background-size: cover;
		 left: 0;
		 position: absolute;
		 right: 0;
		 top: 0;
		 background-image: url('https://prod-cdn.wetransfer.net/packs/media/images/home-illustration-6ea2e70b.jpg');
		 background-position: center;
	}
	 .navbar {
		 background-color: transparent !important;
	}
}
/* ##Device = Most of the Smartphones Mobiles (Portrait) ##Screen = B/w 320px to 479px */
 @media (min-width: 320px) and (max-width: 480px) {
	 body {
		 /* background-image: url('https://source.unsplash.com/1600x900/?art,design,minimal'); */
		 /* background-position: top; */
		 background-repeat: no-repeat;
		 background-size: cover;
		 left: 0;
		 position: absolute;
		 right: 0;
		 top: 0;
		 background-image: url('https://prod-cdn.wetransfer.net/packs/media/images/home-illustration-6ea2e70b.jpg');
		 background-position: top;
	}
	 .navbar {
		 background-color: transparent !important;
	}
}
 
`

export const FontStyle = styled.h1`
  font-family: 'Lalezar', cursive;
`

export const LogoBG = styled.div`
  a {
    background: rgb(63, 255, 201);
	  background: linear-gradient(220deg, rgba(63, 255, 201, 1) 0%, rgba(40, 167, 69, 1) 100%);
  }
`

export default GlobalStyle
