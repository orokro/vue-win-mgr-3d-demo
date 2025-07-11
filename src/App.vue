<!--
	App.vue
	-------

	The main entry component for the application.

	In this top-level root component we'll:
	- Instantiate our App class, which is the main state for the application
	- Import all the components that are used as windows in the app
	- Define our available windows, including names, slugs, components, and icons
	- Define a layout for the windows in the app
	- Set up everything with a simple WindowManager component from the library, in our Template
	- Disable right clicking
-->
<template>
	
	<main @contextmenu="disableContextMenus">

		<WindowManager
			v-if="true"
			ref="windowManagerEl"
			:availableWindows="availableWindows"
			:defaultLayout="layout"
			:showTopBar="true"
			:showStatusBar="true"
			:topBarComponent="HeaderBar"
			:splitMergeHandles="true"
			:theme="{
				frameTabsActiveColor: 'RGB(105,105,105)',
			}"
		>
			<template #statusBar>
				<StatusBar/>
			</template>
		</WindowManager>
	
	</main>
</template>
<script setup>


// vue
import { onMounted, provide, ref } from 'vue';

// import css items
import 'vue-win-mgr/dist/style.css';
import 'material-icons/iconfont/material-icons.css';

// window components
import Viewport from './components/windows/Viewport.vue';
import Notes from './components/windows/Notes.vue';
import About from './components/windows/About.vue';
import SceneList from './components/windows/SceneList.vue';
import Assets from './components/windows/Assets.vue';
import PropertiesInspector from './components/windows/PropertiesInspector.vue';
import Settings from './components/windows/Settings.vue';

// other components
import HeaderBar from './components/HeaderBar.vue';
import StatusBar from './components/StatusBar.vue';

// our app classes
import App from './classes/App.js';

// our window manager system from the library
import { 
	WindowManager, 
	FRAME_STYLE,
	WindowManagerContext,
	WindowFrameContext,
	WindowContext
} from 'vue-win-mgr';

// ref to our window manager element!
const windowManagerEl = ref(null);

// instantiate the app
const app = new App();

// we'll provide the app for dependency injection in whatever windows mount
provide('app', app);


// list of windows to allow in our WindowManager
const availableWindows = [
	{
		window: Viewport,
		title: "Scene Viewport",
		slug: "viewport",
	},
	{
		window: Notes,
		title: "Notes",
		slug: "notes",
	},
	{
		window: SceneList,
		title: "Scene Items",
		slug: "scene-list",
	},
	{
		window: Assets,
		title: "Assets",
		slug: "assets",
	},
	{
		window: PropertiesInspector,
		title: "Properties Inspector",
		slug: "properties-inspector",
	},
	{
		window: About,
		title: "About This App",
		slug: "about",
	},
	{
		window: Settings,
		title: "Settings",
		slug: "settings",
	}
];


// build a layout to test with
const layout  = [
	{	
		// we'll build layout in hypothetical 1080P space
		name: "window",
		top: 0,
		left: 0,
		bottom: 1080,
		right: 1920
	},
	{
		// Main  editor:
		name: "MainView",
		windows: ['viewport', 'about', 'notes'], 
		style: FRAME_STYLE.TABBED,
		left: 0,
		right: ["ref", "window.right-460"],
		top: 0,
		bottom: ["ref", "window.bottom-300"]
	},
	{
		// debug view under main view
		name: "bottom",
		windows: ['assets', 'notes',], 
		left: 0,
		style: FRAME_STYLE.TABBED,
		right: ["ref", "MainView.right"],
		top: ["ref", "MainView.bottom"],
		bottom: ["ref", "window.bottom"]
	},
	{	// Tool palette, on right by default
		name: "sceneList",
		windows: ['scene-list'], 
		style: FRAME_STYLE.TABBED,
		left: ["ref", "MainView.right"],
		right: ["ref", "window.right"],
		top: 0,
		bottom: ["ref", "window.top+400"]
	},
	{
		// Properties inspector, on right by default
		name: "propertiesInspector",
		windows: ['properties-inspector', 'settings'], 
		style: FRAME_STYLE.TABBED,
		left: ["ref", "MainView.right"],
		right: ["ref", "window.right"],
		top: ["ref", "sceneList.bottom"],
		bottom: ["ref", "window.bottom"]
	}
];


/**
 * Disable right-click context menu from browser, unless Shift is held, for debug
 * @param {Event} event - JS Event object
 */
function disableContextMenus(event){

	if(event.shiftKey==false){
		event.preventDefault();
		return false;
	}
}


// for debug, we'll provide it to the window context so it will be available in the console
onMounted(() => {

	window.app = app;

	const ctx = windowManagerEl.value?.getContext();
	window.wctx = ctx;
});


</script>
<style lang="scss" scoped>

	body {
		background: rgb(5, 5, 66);
		/* background: red; */
	}

	// before we introduce the window manager, we'll use some fixed-positioned boxes to test
	// out the components
	.testSpot {

		// for now, fixed sized box
		position: absolute;
		left: 50px;
		top: 50px;
		width: 640px;
		height: 480px;

		&.a {
			left: 50px;
		}
		&.b {
			left: 700px;
		}

		// border & bg
		border: 2px solid gray;
		border-radius: 5px;
		background: gray;

	}// .testSpot

</style>
