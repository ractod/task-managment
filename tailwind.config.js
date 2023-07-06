/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
   mode: "jit",
   darkMode: true,
   theme: {
      extend: {
         colors: {
            primary: {
               light: "#5996ff",
               main: "#3772ff",
               dark: "#1b4df5"
            },
            secondary: {
               light: "#333647",
               main: "#20212c",
               dark: "#0e0f14"
            },
            background: "#17181f",
            mute: "#828388",
            typography: "#D3D3D6"
         },
         fontFamily: {
            IranSans: ["IranSans"]
         },
         screens: {
            sm: "500px",
            md: "760px",
            lg: "900px",
            xl: "1200px",
            "2xl": "1500px"
         },
         container: {
            center: true,
            padding: {
               DEFAULT: "30px",
               md: "0",
               lg: "0",
               xl: "0",
               "2xl": "0"
            },
            screens: {
               sm: "500px",
               md: "760px",
               lg: "900px",
               xl: "1200px",
               "2xl": "1500px"
            }
         },
         animation: {
            navigate:"navigate .5s ease-in-out",
            scale: "scale 1s linear infinite",
            zoom: "zoom .1s ease-in-out"
         },
         keyframes: {
            navigate: {
               "0%": { width: "0" },
               "40%": { width: "70%" },
               "100%": { width: "100%" }
            },
            scale: {
               "0%, 100%": { transform: "scale(.2)",    },
               "30%": { transform: "scale(1)", backgroundColor: "#FFF" },
            },
            zoom: {
               "0%": { transform: "scale(.9)", opacity: "0" },
               "100%": { transform: "scale(1)", opacity: "100%" }
            }
         }
      },
   },
   plugins: [],
};
