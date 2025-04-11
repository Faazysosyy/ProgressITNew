// Logo animation for footer
function initLogoAnimation() {
  const main = document.createElement("main");
  main.style.position = "absolute";
  main.style.bottom = "0";
  main.style.left = "0";
  main.style.width = "100%";
  main.style.height = "100%";
  main.style.pointerEvents = "none"; // Allow clicks to pass through
  main.style.zIndex = "0";
  main.style.opacity = "0.2"; // Set transparency to 20%

  // Create lists for the animation
  for (let i = 0; i < 4; i++) {
    const ul = document.createElement("ul");
    ul.style.setProperty("--index", i);
    main.appendChild(ul);
  }

  // Create style element for keyframes
  const keyframesStyle = document.createElement("style");
  keyframesStyle.id = "keyframes";
  keyframesStyle.type = "text/css";
  document.head.appendChild(keyframesStyle);

  // Add bear link
  const bearLink = document.createElement("a");
  bearLink.className = "bear-link";
  bearLink.href = "#";
  bearLink.target = "_blank";
  bearLink.rel = "noreferrer noopener";
  bearLink.style.display = "none"; // Hide the bear link
  main.appendChild(bearLink);

  // Add SVG to bear link
  bearLink.innerHTML = `
    <svg
      class="w-9"
      viewBox="0 0 969 955"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="161.191"
        cy="320.191"
        r="133.191"
        stroke="currentColor"
        stroke-width="20"
      ></circle>
      <circle
        cx="806.809"
        cy="320.191"
        r="133.191"
        stroke="currentColor"
        stroke-width="20"
      ></circle>
      <circle
        cx="695.019"
        cy="587.733"
        r="31.4016"
        fill="currentColor"
      ></circle>
      <circle
        cx="272.981"
        cy="587.733"
        r="31.4016"
        fill="currentColor"
      ></circle>
      <path
        d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z"
        fill="currentColor"
      ></path>
      <rect
        x="310.42"
        y="448.31"
        width="343.468"
        height="51.4986"
        fill="#FF1E1E"
      ></rect>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z"
        fill="currentColor"
      ></path>
    </svg>
  `;

  // Add CSS styles
  const style = document.createElement("style");
  style.textContent = `
    @layer normalize, base, demo, loops, explode;

    @layer loops {
      :root {
        --duration: 30;
      }

      ul {
        --base-delay: calc(
          sin((var(--index) / var(--lists)) * 45deg) * var(--stagger, 0.6)
        );
      }

      [data-logo] use {
        animation-name: appear;
        animation-duration: calc(var(--duration) * 1s);
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-delay: calc(
          (var(--duration) / var(--items)) * (var(--items) - var(--i)) * -1s +
            (var(--base-delay) * 1s)
        );
        mix-blend-mode: hard-light;
        transform-box: fill-box;
      }
      [data-logo] svg {
        overflow: visible !important;
        height: 3rem;
      }
    }

    @layer demo {
      main {
        display: flex;
        flex-wrap: wrap;
        gap: 4rem;
        justify-content: center;
      }
      ul {
        width: 100px;
        display: grid;
        grid-template: 1fr / 1fr;
        padding: 0;
        margin: 0;
        list-style-type: none;
      }

      li {
        grid-area: 1 / 1;
        display: grid;
        place-items: center;
      }
    }

    @layer base {
      .bear-link {
        color: canvasText;
        position: fixed;
        top: 1rem;
        left: 1rem;
        width: 48px;
        aspect-ratio: 1;
        display: grid;
        place-items: center;
        opacity: 0.8;
      }

      .bear-link svg {
        width: 75%;
      }
    }
  `;
  document.head.appendChild(style);

  // Logo paths
  const paths = [
    {
      title: "Mobile Development",
      path: "M11.901 11.554l.802-4.1.798 4.1zm2.869-6.52h-4.15L8.2 15.884l4.503-3.635 4.695 3.934zm-2.067 8.156l-7.509 6.072H19.95zM24 5.02v2.77h-2.066v11.45h-.882l-2.436-2.04V7.79h-2.057V5.02zM6.872 16.864c.548-.458.642-1.024.642-1.532V13.2h-2.98v2.894a.75.75 0 0 1-.748.751c-.414 0-.722-.336-.722-.75V7.893c0-.414.308-.75.722-.75a.75.75 0 0 1 .749.75v2.913H7.51V7.785c0-1.67-1.092-3.044-3.75-3.047-2.728 0-3.76 1.38-3.76 3.05v8.563c0 1.655 1.314 2.907 2.995 2.907h.922Z",
    },
    {
      title: "Digital Marketing",
      path: "M16.331 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.186 1.186 0 01-.806-.237 1.038 1.038 0 01-.352-.498 1.21 1.21 0 01-.023-.667c.052-.225.178-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.34 2.34 0 00-.903.206c-.287.132-.54.327-.739.571a2.221 2.221 0 00-.04 2.705c.295.378.709.645 1.175.756.491.12 1.006.102 1.487-.052l.082-.023M5.336 18.171V17.06l-.022.01c-.25.121-.522.19-.801.203a1.183 1.183 0 01-.806-.237 1.03 1.03 0 01-.351-.498 1.202 1.202 0 01-.024-.667c.052-.225.177-.426.357-.569.16-.134.355-.218.562-.242a1.85 1.85 0 011.061.198l.024.013v-1.117l-.051-.014a2.862 2.862 0 00-1.011-.132 2.344 2.344 0 00-.903.206 2.08 2.08 0 00-.74.571 2.224 2.224 0 00-.041 2.705 2.11 2.11 0 001.176.756c.491.12 1.005.102 1.487-.052l.083-.023M9.26 17.249l-.004.957.07.012c.22.041.441.069.664.085.195.019.391.022.587.012.187-.014.372-.049.551-.104.21-.06.405-.163.571-.305a1.16 1.16 0 00.333-.478 1.31 1.31 0 00-.007-.96 1.068 1.068 0 00-.298-.414 1.261 1.261 0 00-.438-.255l-.722-.268a.388.388 0 01-.197-.188.245.245 0 01.008-.219.382.382 0 01.154-.142.798.798 0 01.257-.074c.153-.022.308-.021.46.005.18.02.358.051.533.096l.038.008v-.883l-.069-.015a4.749 4.749 0 00-.543-.097 2.844 2.844 0 00-.714-.003c-.3.027-.585.143-.821.33-.16.126-.281.293-.351.484-.104.29-.105.608 0 .899.054.145.14.274.252.381.097.093.207.173.327.236.157.084.324.149.497.195.057.017.114.035.17.054l.085.031.024.01c.084.03.162.078.226.14.045.042.08.094.101.151a.325.325 0 01.001.161.339.339 0 01-.166.198.856.856 0 01-.275.086 2.032 2.032 0 01-.427.021 5.208 5.208 0 01-.557-.074 9.195 9.195 0 01-.287-.067l-.033-.006zm-2.475.995h1.05v-4.167h-1.05v4.167zm12.162-2.936a1.095 1.095 0 011.541.158 1.094 1.094 0 01-.157 1.541l-.017.014a1.096 1.096 0 01-1.367-1.713m-1.525.854a2.193 2.193 0 002.666 2.107 2.139 2.139 0 00.701-3.937 2.207 2.207 0 00-3.367 1.83M22.961 10.728a.52.52 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M20.117 10.728a.522.522 0 001.041 0V8.139a.521.521 0 00-1.04 0v2.589M17.231 11.771a.521.521 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M14.393 10.728a.521.521 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M11.494 10.728a.522.522 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155M8.624 10.728a.52.52 0 001.039 0V8.139a.52.52 0 00-1.039 0v2.589M5.737 11.771a.52.52 0 001.039 0V6.17a.52.52 0 00-1.039 0v5.601M2.876 10.728a.522.522 0 001.04 0V8.139a.52.52 0 00-1.039 0v2.589M0 10.728a.521.521 0 001.039 0V9.573a.52.52 0 00-1.039 0v1.155",
    },
    {
      title: "Data Analytics",
      path: "M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 013.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 00-2.215-.221z",
    },
    {
      title: "Brand Strategy",
      path: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z",
    },
    {
      title: "Web Development",
      path: "M0 7.97v4.958c0 1.867 1.302 3.101 3 3.101.826 0 1.562-.316 2.094-.87v.736H6.27V7.97H5.082v4.888c0 1.257-.85 2.106-1.947 2.106-1.11 0-1.946-.827-1.946-2.106V7.971H0zm7.44 0v7.925h1.13v-.725c.521.532 1.257.86 2.06.86a3.006 3.006 0 0 0 3.034-3.01 3.01 3.01 0 0 0-3.033-3.024 2.86 2.86 0 0 0-2.049.861V7.971H7.439zm9.869 2.038c-1.687 0-2.965 1.37-2.965 3 0 1.72 1.334 3.01 3.066 3.01 1.053 0 1.913-.463 2.49-1.233l-.826-.611c-.43.577-.996.847-1.664.847-.973 0-1.753-.7-1.912-1.64h4.697v-.373c0-1.72-1.222-3-2.886-3zm6.295.068c-.634 0-1.098.294-1.381.758v-.713h-1.131v5.774h1.142V12.61c0-.894.544-1.47 1.291-1.47H24v-1.065h-.396zm-6.319.928c.85 0 1.564.588 1.756 1.47H15.52c.203-.882.916-1.47 1.765-1.47zm-6.732.012c1.086 0 1.98.883 1.98 2.004a1.993 1.993 0 0 1-1.98 2.001A1.989 1.989 0 0 1 8.56 13.02a1.99 1.99 0 0 1 1.992-2.004z",
    },
  ];

  // Config
  const config = {
    items: 4,
    duration: 20,
    blur: 2,
    x: 14,
    y: 34,
    step: 2,
    transition: 1,
    underlap: 2,
    stagger: 0.6,
    explode: false,
  };

  // Shuffle paths
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  // Generate lists
  const generateList = () => {
    const shuffledPaths = shuffle([...paths]);
    const lists = document.querySelectorAll("ul");
    lists.forEach((list, l) => {
      list.style.setProperty("--index", l);
      list.style.setProperty("--items", config.items);
      list.innerHTML = ``;

      for (let index = 0; index < config.items; index++) {
        const pathIndex = l * config.items + index;
        const { title, path } = shuffledPaths[pathIndex % shuffledPaths.length];

        const li = document.createElement("li");
        li.setAttribute("data-logo", "");
        li.style.setProperty("--i", index + 1);

        li.innerHTML = `
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>${title}</title>
            <defs>
              <path id="path-${pathIndex}" d="${path}" />
            </defs>
            <use fill="#0f172a" style="--u: 0;" xlink:href="#path-${pathIndex}" />
            <use fill="#0f172a" style="--u: 1;" xlink:href="#path-${pathIndex}" />
            <use fill="#0f172a" style="--u: 2;" xlink:href="#path-${pathIndex}" />
            <use fill="currentColor" style="--u: 3;" xlink:href="#path-${pathIndex}" />
          </svg>
        `;

        list.appendChild(li);

        if (l === 0) {
          const markerLi = document.createElement("li");
          markerLi.setAttribute("data-marker", "");
          markerLi.style.setProperty("--i", index + 1);
          list.appendChild(markerLi);
        }
      }
    });
  };

  // Generate keyframes
  const generateKeyframes = () => {
    const base = Number.parseFloat((100 - 100 / config.items).toFixed(2));
    const first = base - config.underlap;
    const mid = base + config.transition;
    const end = 100 - config.underlap - config.transition;

    const keyframes = `
      @keyframes appear {
        0%, ${first}% {
          animation-timing-function: ease-out;
          filter: blur(calc(var(--blur, 0) * 1px));
          opacity: var(--opacity, 0);
          translate:
            calc((var(--movement-x, 0) + (var(--u, 0) * var(--movement-step, 0))) * -1px)
            calc((var(--movement-y, 0) + (var(--u, 0) * var(--movement-step, 0))) * 1px);
        }
        ${mid}%, ${end}% {
          animation-timing-function: ease-in;
          filter: blur(0px);
          opacity: 1;
          translate: 0 0;
          z-index: 2;
        }
        100% {
          filter: blur(calc(var(--blur, 0) * 1px));
          opacity: var(--opacity, 0);
          translate:
            calc((var(--movement-x, 0) + (var(--u, 0) * var(--movement-step, 0))) * 1px)
            calc((var(--movement-y, 0) + (var(--u, 0) * var(--movement-step, 0))) * -1px);
        }
      }
    `;

    keyframesStyle.innerHTML = keyframes;
  };

  // Set CSS variables
  document.documentElement.style.setProperty("--duration", config.duration);
  document.documentElement.style.setProperty("--stagger", config.stagger);
  document.documentElement.style.setProperty("--movement-x", config.x);
  document.documentElement.style.setProperty("--movement-y", config.y);
  document.documentElement.style.setProperty("--movement-step", config.step);
  document.documentElement.style.setProperty("--blur", config.blur);

  // Set lists property
  main.style.setProperty("--lists", 4);

  // Initialize
  generateList();
  generateKeyframes();

  return main;
}
