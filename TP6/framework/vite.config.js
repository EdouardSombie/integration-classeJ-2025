import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "./index.html"),
			name: "ESGI_framework",
			//formats: ["es"],
		},
		rollupOptions: {
			output: {
				entryFileNames: "js/framework.js",
				assetFileNames: ({ name }) => {
					// Ne sera pas utilisé dans le cadre d'une génération de library...
					if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
						return "images/[name][extname]";
					}
					if (/\.css$/.test(name ?? "")) {
						// return "assets/css/[name]-[hash][extname]";
						return "css/[name][extname]";
					}
					// default value
					// ref: https://rollupjs.org/guide/en/#outputassetfilenames
					return "assets/[name]-[hash][extname]";
				},
			},
		},
	}, // ...
});
