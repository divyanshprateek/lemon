// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  	production: false,
  	firebase: {
		apiKey: "AIzaSyC85_KMLUvnylngcBcuc-sCAtMWKNEyKbk",
    	authDomain: "lemon-d6637.firebaseapp.com",
    	databaseURL: "https://lemon-d6637.firebaseio.com",
    	projectId: "lemon-d6637",
    	storageBucket: "lemon-d6637.appspot.com",
    	messagingSenderId: "923603237424"
	},
	themes: [
		{
			name:'Light',
		    primary: '#555555',
		    secondary: '#a1a1a1',
		    tertiary: '#cccccc',
		    light: '#e1e1e1',
		    medium: '#7d7d7d',
		    dark: '#111111'
		},{
			name:'Gray',
		    primary: '#9e9e9e',
		    secondary: '#808080',
		    tertiary: '#bbbbbb',
		    light: '#e1e1e1',
		    medium: '#838383',
		    dark: '#333333'
		},{
			name:'Dark',
		    primary: '#f2f2f2',
		    secondary: '#a1a1a1',
		    tertiary: '#cccccc',
		    light: '#111111',
		    medium: '#7d7d7d',
		    dark: '#e1e1e1'
		},{
			name:'Red',
		    primary: '#EF5350',
		    secondary: '#78be97',
		    tertiary: '#ed553b',
		    light: '#fde8df',
		    medium: '#fcd0a2',
		    dark: '#1a1415'
		},{
			name:'Pink',
		    primary: '#F50057',
		    secondary: '#0266be',
		    tertiary: '#f67280',
		    light: '#f5d8d7',
		    medium: '#f59e9d',
		    dark: '#1a1415'
		},{
			name:'Purple',
		    primary: '#673ab7',
		    secondary: '#5fd9cd',
		    tertiary: '#7c4dff',
		    light: '#ded5ef',
		    medium: '#8e76b8',
		    dark: '#16141a'
		},{
			name:'Indigo',
		    primary: '#3f51b5',
		    secondary: '#5fbf43',
		    tertiary: '#536dfe',
		    light: '#d6d9ec',
		    medium: '#747eb5',
		    dark: '#14151a'
		},{
			name:'Blue',
		    primary: '#03a9f4',
		    secondary: '#ddd145',
		    tertiary: '#40c4ff',
		    light: '#d7ebf5',
		    medium: '#9dd9f5',
		    dark: '#14181a'
		},{
			name:'Cyan',
		    primary: '#00bcd4',
		    secondary: '#eba669',
		    tertiary: '#18ffff',
		    light: '#c9f0f5',
		    medium: '#87cbd4',
		    dark: '#14191a'
		},{
			name:'Teal',
		    primary: '#4caf50',
		    secondary: '#e06768',
		    tertiary: '#69f0ae',
		    light: '#c9e6e4',
		    medium: '#71b073',
		    dark: '#141a15'
		},{
			name:'Green',
		    primary: '#a5c331',
		    secondary: '#ff5a65',
		    tertiary: '#45ba25',
		    light: '#e3efd5',
		    medium: '#b4c27c',
		    dark: '#181a14'
		},{
			name:'Yellow',
		    primary: '#ffeb3b',
		    secondary: '#f37e6e',
		    tertiary: '#ffff8d',
		    light: '#fffce0',
		    medium: '#fff6a3',
		    dark: '#1a1914'
		},{
			name:'Orange',
		    primary: '#ff9800',
		    secondary: '#7d65e8',
		    tertiary: '#ffab40',
		    light: '#fff3e0',
		    medium: '#ffdaa3',
		    dark: '#1a1714'
		},{
			name:'Brown',
		    primary: '#795548',
		    secondary: '#005ba8',
		    tertiary: '#a1887f',
		    light: '#e7d6d0',
		    medium: '#78584d',
		    dark: '#1a1614'
		}
	],
	menu: [{
		name: 'Facebook',
		path: 'facebook',
		component: 'FacebookPage',
		icon: 'logo-facebook'
	},{
		name: 'Instagram',
		path: 'instagram',
		component: 'InstagramPage',
		icon: 'logo-instagram'
	},{
		name: 'Youtube',
		path: 'youtube',
		component: 'YoutubePage',
		icon: 'logo-youtube'
	},{
		name: 'Unsplash',
		path: 'unsplash',
		component: 'UnsplashPage',
		icon: 'camera'
	},{
		name: 'Wordpress',
		path: 'wordpress',
		component: 'WordpressPage',
		icon: 'logo-wordpress'
	},{
		name: 'Rss',
		path: 'rss',
		component: 'RssPage',
		icon: 'logo-rss'
	},{
		name: 'Ui Component',
		path: 'ui-elements',
		component: 'FragmentPage',
		icon: 'ios-apps',
		child: [{
			name: 'Action Sheet',
			path: 'action-sheet',
			page: 'ActionSheetComponent',
		},{
			name: 'Alert',
			path: 'alert',
			page: 'AlertComponent',
		},{
			name: 'Badge',
			path: 'badge',
			page: 'BadgeComponent',
		},{
			name: 'Button',
			path: 'button',
			page: 'ButtonComponent',
		},{
			name: 'Card',
			path: 'card',
			page: 'CardComponent',
		},{
			name: 'Checkbox',
			path: 'checkbox',
			page: 'CheckboxComponent',
		},{
			name: 'Date Time',
			path: 'date-time',
			page: 'DateTimeComponent',
		},{
			name: 'Fab',
			path: 'fab',
			page: 'FabComponent'
		},
		// },{
		// 	name: 'Infinite Scroll',
		// 	path: 'infinite-scroll',
		// 	page: 'InfiniteScrollComponent',
		// },{
		{
			name: 'Input',
			path: 'input',
			page: 'InputComponent',
		},{
			name: 'List',
			path: 'list',
			page: 'ListComponent',
		},{
			name: 'Loading',
			path: 'loading',
			page: 'LoadingComponent',
		},{
			name: 'Modal',
			path: 'modal',
			page: 'ModalComponent',
		},{
			name: 'Range',
			path: 'range',
			page: 'RangeComponent',
		},{
			name: 'Refresher',
			path: 'refresher',
			page: 'RefresherComponent',
		},{
			name: 'Searchbar',
			path: 'searchbar',
			page: 'SearchbarComponent',
		},{
			name: 'Segment',
			path: 'segment',
			page: 'SegmentComponent',
		},{
			name: 'Select',
			path: 'select',
			page: 'SelectComponent',
		},{
			name: 'Spinner',
			path: 'spinner',
			page: 'SpinnerComponent',
		},{
			name: 'Toast',
			path: 'toast',
			page: 'ToastComponent',
		}]
	},{
		name: 'Parallax',
		path: 'parallax',
		component: 'FragmentPage',
		icon: 'ios-albums',
		child: [{
			name: 'Parallax Background',
			path: 'parallax-background',
			page: 'ParallaxBackgroundPage'
		},{
			name: 'Parallax Collapse',
			path: 'parallax-collapse',
			page: 'ParallaxCollapsePage'
		},{
			name: 'Parallax Cover',
			path: 'parallax-cover',
			page: 'ParallaxCoverPage'
		},{
			name: 'Parallax Mix',
			path: 'parallax-mix',
			page: 'ParallaxMixPage'
		}]
	},
	{
		name: 'Drop & Drag',
		path: 'drop-drag',
		component: 'DropDragPage',
		icon: 'ios-move',
	},
	{
		name: 'Firebase Crud',
		path: 'firebase-crud',
		component: 'FirebaseCrudPage',
		icon: 'ios-done-all',
	},{
		name: 'Slides',
		path: 'slides',
		component: 'FragmentPage',
		icon: 'ios-barcode',
		child: [{
			name: 'Slides Mold',
			path: 'slides-mold',
			page: 'SlidesMoldPage'
		},{
			name: 'Slides options',
			path: 'slides-options',
			page: 'SlidesOptionsPage'
		}]
	},{
		name: 'Gallery',
		path: 'gallery',
		component: 'FragmentPage',
		icon: 'ios-easel',
		child: [{
			name: 'Gallery Grid',
			path: 'gallery-grid',
			page: 'GalleryGridPage'
		},{
			name: 'Gallery Masonry',
			path: 'gallery-masonry',
			page: 'GalleryMasonryPage'
		},{
			name: 'Gallery List',
			path: 'gallery-list',
			page: 'GalleryListPage'
		},{
			name: 'Gallery Info',
			path: 'gallery-info',
			page: 'GalleryInfoPage'
		}]
	},{
		name: 'Blog',
		path: 'blog',
		component: 'FragmentPage',
		icon: 'ios-today',
		child: [{
			name: 'Blog Timeline',
			path: 'blog-timeline',
			page: 'BlogTimelinePage'
		},{
			name: 'Blog Post',
			path: 'blog-post',
			page: 'BlogPostPage'
		},{
			name: 'Blog List',
			path: 'blog-list',
			page: 'BlogListPage'
		}]
	},{
		name: 'Login',
		path: 'login-mold',
		component: 'FragmentPage',
		icon: 'ios-log-in',
		child: [{
			name: 'Login v1',
			path: 'login-v1',
			page: 'LoginV1Page'
		},{
			name: 'Login V2',
			path: 'login-v2',
			page: 'LoginV2Page'
		},{
			name: 'Login V3',
			path: 'login-v3',
			page: 'LoginV3Page'
		},{
			name: 'Login V4',
			path: 'login-v4',
			page: 'LoginV4Page'
		},{
			name: 'Login V5',
			path: 'login-v5',
			page: 'LoginV5Page'
		},{
			name: 'Login V6',
			path: 'login-v6',
			page: 'LoginV6Page'
		},{
			name: 'Login V7',
			path: 'login-v7',
			page: 'LoginV7Page'
		},{
			name: 'Login V8',
			path: 'login-v8',
			page: 'LoginV8Page'
		},{
			name: 'Login V9',
			path: 'login-v9',
			page: 'LoginV9Page'
		}]
	},{
		name: 'Profile',
		path: 'profile-mold',
		component: 'FragmentPage',
		icon: 'ios-person',
		child: [{
			name: 'Profile V1',
			path: 'profile-v1',
			page: 'ProfileV1Page'
		},{
			name: 'Profile V2',
			path: 'profile-v2',
			page: 'ProfileV2Page'
		},{
			name: 'Profile V3',
			path: 'profile-v3',
			page: 'ProfileV3Page'
		},{
			name: 'Profile V4',
			path: 'profile-v4',
			page: 'ProfileV4Page'
		},{
			name: 'Profile V5',
			path: 'profile-v5',
			page: 'ProfileV5Page'
		}]
	},{
		name: 'Register',
		path: 'register',
		component: 'FragmentPage',
		icon: 'ios-power',
		child: [{
			name: 'Register V1',
			path: 'register-v1',
			page: 'RegisterV1Page'
		},{
			name: 'Register V2',
			path: 'register-v2',
			page: 'RegisterV2Page'
		},{
			name: 'Register V3',
			path: 'register-v3',
			page: 'RegisterV3Page'
		}]
	},{
		name: 'Error',
		path: 'error',
		component: 'ErrorPage',
		icon: 'ios-bug',
		child: [{
			name: 'Notfound',
			path: 'notfound',
			page: 'NotfoundPage'
		},{
			name: 'Internal',
			path: 'internal',
			page: 'InternalPage'
		}]
	},{
		name: 'Admob',
		path: 'admob',
		component: 'AdmobPage',
		icon: 'ios-tv'
	}]
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
