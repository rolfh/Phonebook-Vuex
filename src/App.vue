<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="less">
body {
	margin: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

* {
	box-sizing: border-box;
}

img {
	max-width: 100%;
}

.container {
	width: 750px;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
}

h1,
h2,
h3 {
	text-align: center;
	margin-top: 0;
}
h3 {
	font-size: 23px;
}
p {
	margin: 0 0 5px 0;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
.number {
	font-family: 'SF Mono', monospace;
	font-size: 16px;
}

ul:empty {
	display: none;
}
</style>
