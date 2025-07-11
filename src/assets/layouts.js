/*
    layouts.js
	----------
	
	This file will provide two layouts to use in our header bar,
	but we'll put them over here in assets to not clutter the component too much.
*/

// our window manager system from the library
import { FRAME_STYLE } from 'vue-win-mgr';


// the default layout
const defaultLayout = [
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

// the quad view layout
const quadLayout = [
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
		right: 730,
		top: 0,
		bottom: 390
	},
	{
		// Main  editor:
		name: "TopView",
		windows: [{kind: 'viewport', props: {side: 'top'}}], 
		style: FRAME_STYLE.SINGLE,
		left: ["ref", "MainView.right"],
		right: 730*2,
		top: 0,
		bottom: 390
	},
	{
		// Main  editor:
		name: "LeftView",
		windows: [{kind: 'viewport', props: {side: 'left'}}],
		style: FRAME_STYLE.SINGLE,
		left: 0,
		right: 730,
		top: 390,
		bottom: 390*2
	},
	{
		// Main  editor:
		name: "RightView",
		windows: [{kind: 'viewport', props: {side: 'right'}}],
		style: FRAME_STYLE.SINGLE,
		left: ["ref", "MainView.right"],
		right: 730*2,
		top: 390,
		bottom: 390*2
	},
	{
		// debug view under main view
		name: "bottom",
		windows: ['assets', 'notes',], 
		left: 0,
		style: FRAME_STYLE.TABBED,
		right: ["ref", "TopView.right"],
		top: ["ref", "LeftView.bottom"],
		bottom: ["ref", "window.bottom"]
	},
	{	// Tool palette, on right by default
		name: "sceneList",
		windows: ['scene-list'], 
		style: FRAME_STYLE.TABBED,
		left: ["ref", "TopView.right"],
		right: ["ref", "window.right"],
		top: 0,
		bottom: ["ref", "window.top+400"]
	},
	{
		// Properties inspector, on right by default
		name: "propertiesInspector",
		windows: ['properties-inspector', 'settings'], 
		style: FRAME_STYLE.TABBED,
		left: ["ref", "TopView.right"],
		right: ["ref", "window.right"],
		top: ["ref", "sceneList.bottom"],
		bottom: ["ref", "window.bottom"]
	}
];

// provide layouts
export { defaultLayout, quadLayout };
