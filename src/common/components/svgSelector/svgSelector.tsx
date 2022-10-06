import React from 'react';

export type SvgSelectorPropsType = {
    svgName: "cap" | "pencil" | "delete" | "funnel"
}

export const SvgSelector = (props: SvgSelectorPropsType) => {
    switch (props.svgName) {
        case "cap": {
            return (
                <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.7001 1.68669L2.68677 4.30669C1.4001 5.14669 1.4001 7.02669 2.68677 7.86669L6.7001 10.4867C7.4201 10.96 8.60677 10.96 9.32677 10.4867L13.3201 7.86669C14.6001 7.02669 14.6001 5.15336 13.3201 4.31336L9.32677 1.69336C8.60677 1.21336 7.4201 1.21336 6.7001 1.68669Z"
                        stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M3.75343 8.71997L3.74677 11.8466C3.74677 12.6933 4.4001 13.6 5.2001 13.8666L7.32677 14.5733C7.69343 14.6933 8.3001 14.6933 8.67343 14.5733L10.8001 13.8666C11.6001 13.6 12.2534 12.6933 12.2534 11.8466V8.7533"
                        stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.2668 10V6" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            )
        }
        case "pencil": {
            return (
                <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.345 0.958172C11.1228 0.858708 11.9098 1.17678 12.7094 1.92915L12.7103 1.93002C13.5126 2.68875 13.8778 3.45841 13.823 4.24233C13.7701 4.99983 13.3309 5.64097 12.8302 6.17001M12.8302 6.17001L7.35959 11.9605C7.20536 12.1284 6.9977 12.2706 6.80084 12.3759C6.60144 12.4825 6.3708 12.5738 6.15427 12.6122L6.15094 12.6128L4.00504 12.9794C3.48467 13.0691 2.98567 12.939 2.6302 12.6019C2.27523 12.2653 2.11837 11.7744 2.17648 11.2514L2.17665 11.2499L2.42439 9.08054C2.45316 8.86474 2.5333 8.63122 2.62778 8.42864C2.72191 8.22679 2.85034 8.01276 3.00233 7.85096L3.00331 7.84993L8.47664 2.05659C8.97766 1.52734 9.59336 1.05429 10.345 0.958172M9.20319 2.7437C9.20311 2.74379 9.20328 2.74362 9.20319 2.7437L3.73118 8.53564C3.73107 8.53576 3.73129 8.53552 3.73118 8.53564C3.67653 8.59395 3.60146 8.70678 3.53407 8.85129C3.4679 8.99319 3.42815 9.12446 3.41623 9.20884L3.17036 11.3618C3.17034 11.3621 3.17031 11.3623 3.17029 11.3625C3.14195 11.6192 3.2217 11.7847 3.31831 11.8763C3.41451 11.9676 3.58218 12.0375 3.83514 11.9939L3.8359 11.9938L5.98064 11.6274C6.06416 11.6123 6.19284 11.567 6.32934 11.494C6.46773 11.42 6.57183 11.3402 6.62394 11.2831L6.62992 11.2765L12.1033 5.48326C12.5491 5.01236 12.7968 4.58326 12.8255 4.1726C12.8523 3.78829 12.6943 3.29146 12.0237 2.6571C11.3569 2.02977 10.8539 1.90123 10.4718 1.95009C10.0636 2.0023 9.64874 2.27312 9.20319 2.7437Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.84978 2.87261C8.12263 2.8301 8.37828 3.01683 8.42079 3.28968C8.67221 4.90342 9.98189 6.1385 11.6102 6.3025C11.8849 6.33017 12.0852 6.57534 12.0576 6.85009C12.0299 7.12484 11.7847 7.32514 11.51 7.29746C9.43161 7.08813 7.75463 5.50987 7.43271 3.44362C7.3902 3.17077 7.57693 2.91512 7.84978 2.87261Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.50009 14.6666C1.50009 14.3905 1.72395 14.1666 2.00009 14.1666H14.0001C14.2762 14.1666 14.5001 14.3905 14.5001 14.6666C14.5001 14.9428 14.2762 15.1666 14.0001 15.1666H2.00009C1.72395 15.1666 1.50009 14.9428 1.50009 14.6666Z" fill="black"/>
                </svg>
            )
        }
        case "delete": {
            return (
                <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.31058 3.35578C4.64695 3.22082 5.98348 3.15332 7.3201 3.15332C9.56368 3.15332 11.8135 3.26751 14.0494 3.48909C14.3242 3.51632 14.5249 3.76117 14.4977 4.03596C14.4704 4.31076 14.2256 4.51145 13.9508 4.48422C11.7467 4.26579 9.52985 4.15332 7.3201 4.15332C6.01696 4.15332 4.71374 4.21913 3.41035 4.35079L3.40888 4.35093L2.04888 4.48427C1.77406 4.51121 1.52943 4.31026 1.50248 4.03544C1.47554 3.76061 1.67649 3.51598 1.95131 3.48904L3.31058 3.35578Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.30649 2.52308L6.15986 3.39618C6.11413 3.66851 5.85628 3.8522 5.58396 3.80647C5.31163 3.76073 5.12794 3.50289 5.17367 3.23056L5.32034 2.35723C5.3229 2.34202 5.32554 2.32609 5.32821 2.30996C5.37411 2.0327 5.44146 1.62596 5.71259 1.3185C6.02863 0.960119 6.51083 0.833374 7.12677 0.833374H8.87343C9.49686 0.833374 9.97858 0.970307 10.2927 1.33234C10.5642 1.64521 10.6299 2.05341 10.6737 2.32598C10.6759 2.33924 10.678 2.35218 10.68 2.36478L10.8264 3.22994C10.8725 3.50222 10.6891 3.76029 10.4169 3.80636C10.1446 3.85244 9.88652 3.66907 9.84044 3.3968L9.69327 2.52717C9.63751 2.18515 9.60223 2.06239 9.53746 1.98774C9.50162 1.94644 9.37667 1.83337 8.87343 1.83337H7.12677C6.61603 1.83337 6.4949 1.9433 6.46261 1.97991C6.4012 2.04955 6.36654 2.16655 6.30649 2.52308Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.599 5.59444C12.8745 5.61223 13.0835 5.85004 13.0657 6.12561L12.6322 12.8417L12.6313 12.8543C12.6138 13.1052 12.5944 13.381 12.5428 13.6376C12.4892 13.9038 12.3947 14.1846 12.2033 14.4338C11.8025 14.9556 11.1205 15.1667 10.1401 15.1667H5.8601C4.87972 15.1667 4.19768 14.9556 3.7969 14.4338C3.60549 14.1846 3.51103 13.9038 3.45744 13.6376C3.40575 13.381 3.38644 13.1052 3.36887 12.8543L3.36779 12.8389L2.93447 6.12561C2.91668 5.85004 3.12565 5.61223 3.40122 5.59444C3.67679 5.57665 3.9146 5.78563 3.93239 6.06119L4.36554 12.7718C4.36557 12.7722 4.3656 12.7727 4.36563 12.7732C4.38445 13.0417 4.40037 13.2546 4.43775 13.4402C4.47416 13.621 4.5247 13.7397 4.58996 13.8247C4.70251 13.9712 4.98047 14.1667 5.8601 14.1667H10.1401C11.0197 14.1667 11.2977 13.9712 11.4102 13.8247C11.4755 13.7397 11.526 13.621 11.5624 13.4402C11.5998 13.2546 11.6157 13.0417 11.6346 12.7732C11.6346 12.7727 11.6346 12.7722 11.6347 12.7718L12.0678 6.06119C12.0856 5.78563 12.3234 5.57665 12.599 5.59444Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.38676 11C6.38676 10.7239 6.61062 10.5 6.88676 10.5H9.10676C9.38291 10.5 9.60676 10.7239 9.60676 11C9.60676 11.2761 9.38291 11.5 9.10676 11.5H6.88676C6.61062 11.5 6.38676 11.2761 6.38676 11Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83344 8.33337C5.83344 8.05723 6.05729 7.83337 6.33344 7.83337H9.66677C9.94291 7.83337 10.1668 8.05723 10.1668 8.33337C10.1668 8.60952 9.94291 8.83337 9.66677 8.83337H6.33344C6.05729 8.83337 5.83344 8.60952 5.83344 8.33337Z" fill="black"/>
                </svg>
            )
        }
        case "funnel": {
            return (
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33 2.76001C4.65773 2.76001 4.06 3.3103 4.06 4.13V6.45001C4.06 6.61289 4.11976 6.88228 4.25804 7.19049C4.39351 7.49245 4.57376 7.76307 4.75033 7.93964L4.76362 7.95327L8.60362 11.9933C8.61622 12.0066 8.62834 12.0203 8.63995 12.0345C8.90269 12.3549 9.1413 12.7775 9.31526 13.2131C9.48798 13.6456 9.62 14.1484 9.62 14.63V19.98C9.62 20.9693 10.755 21.5824 11.6001 21.0655L13.0033 20.1598C13.3513 19.9352 13.8155 20.0352 14.0401 20.3833C14.2648 20.7313 14.1647 21.1955 13.8167 21.4201L12.4067 22.3302L12.3944 22.3379C10.6201 23.435 8.12 22.2285 8.12 19.98V14.63C8.12 14.4016 8.05201 14.0944 7.92223 13.7694C7.79823 13.4589 7.63899 13.1851 7.49569 13.0049L3.68247 8.99307C3.35228 8.66061 3.0801 8.22943 2.88946 7.80449C2.70023 7.38272 2.56 6.89713 2.56 6.45001V4.13C2.56 2.52971 3.78226 1.26001 5.33 1.26001H18.67C20.1942 1.26001 21.44 2.50582 21.44 4.03003V6.25C21.44 6.79751 21.2721 7.36157 21.0548 7.83769C20.8365 8.31586 20.5372 8.77344 20.2103 9.10034C19.9174 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86658 19.5285 7.56916 19.6902 7.21482C19.8529 6.85843 19.94 6.51249 19.94 6.25V4.03003C19.94 3.33423 19.3658 2.76001 18.67 2.76001H5.33Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.88 10.75C14.6742 10.75 12.88 12.5442 12.88 14.75C12.88 15.5003 13.091 16.2135 13.4575 16.8049L13.4636 16.8148L13.4635 16.8148C14.1539 17.9683 15.4249 18.75 16.88 18.75C18.3376 18.75 19.6064 17.9762 20.2952 16.8169L20.3 16.8089L20.3 16.8089C20.6703 16.2031 20.88 15.4978 20.88 14.75C20.88 12.5442 19.0858 10.75 16.88 10.75ZM11.38 14.75C11.38 11.7158 13.8458 9.25 16.88 9.25C19.9142 9.25 22.38 11.7158 22.38 14.75C22.38 15.7805 22.0907 16.7538 21.5824 17.5871C20.6307 19.1856 18.8807 20.25 16.88 20.25C14.8772 20.25 13.1297 19.174 12.1794 17.5901C11.6679 16.7626 11.38 15.7777 11.38 14.75Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1097 12.9496C15.4026 12.6568 15.8774 12.6568 16.1703 12.9497L18.6803 15.4597C18.9732 15.7526 18.9732 16.2274 18.6803 16.5203C18.3874 16.8132 17.9126 16.8132 17.6197 16.5203L15.1097 14.0103C14.8168 13.7174 14.8168 13.2425 15.1097 12.9496Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6603 12.9797C18.9532 13.2726 18.9532 13.7474 18.6603 14.0403L16.1503 16.5503C15.8574 16.8432 15.3826 16.8432 15.0897 16.5504C14.7968 16.2575 14.7968 15.7826 15.0897 15.4897L17.5997 12.9797C17.8926 12.6868 18.3674 12.6868 18.6603 12.9797Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33 2.75C4.65773 2.75 4.06 3.30029 4.06 4.12V6.45001C4.06 6.60419 4.12005 6.87213 4.2613 7.18567C4.3991 7.49153 4.58111 7.76699 4.75555 7.94492L4.76368 7.95321L4.76362 7.95327L8.60362 11.9933C8.61831 12.0088 8.63233 12.0248 8.64565 12.0415C8.89874 12.3578 9.13572 12.7765 9.31072 13.2111C9.48403 13.6416 9.62 14.1456 9.62 14.63V19.98C9.62 20.9693 10.755 21.5824 11.6001 21.0655L13.0033 20.1598C13.012 20.1542 13.0208 20.1488 13.0297 20.1435C13.1215 20.0895 13.2651 19.9431 13.3902 19.7014C13.4988 19.4916 13.5562 19.2817 13.5678 19.1267C13.0027 18.7096 12.5335 18.1826 12.178 17.5877C11.6695 16.7543 11.38 15.7808 11.38 14.75C11.38 11.7158 13.8458 9.25 16.88 9.25C17.1576 9.25 17.4328 9.27061 17.7019 9.3127L19.1616 8.02713C19.3344 7.84522 19.5332 7.55101 19.6899 7.20684C19.8529 6.84854 19.94 6.50245 19.94 6.23999V4.02002C19.94 3.32422 19.3658 2.75 18.67 2.75H5.33ZM2.56 4.12C2.56 2.5197 3.78226 1.25 5.33 1.25H18.67C20.1942 1.25 21.44 2.49582 21.44 4.02002V6.23999C21.44 6.78753 21.2721 7.35145 21.0551 7.82816C20.837 8.30752 20.5389 8.76523 20.2156 9.09506C20.2027 9.10814 20.1894 9.12075 20.1757 9.13285L18.4157 10.6828C18.2321 10.8446 17.9811 10.9065 17.7433 10.8489C17.4753 10.7839 17.1849 10.75 16.88 10.75C14.6742 10.75 12.88 12.5442 12.88 14.75C12.88 15.4978 13.0897 16.2031 13.46 16.8089L13.4641 16.8156L13.464 16.8157C13.7753 17.3372 14.2009 17.7773 14.7119 18.0905C14.9344 18.2269 15.07 18.4691 15.07 18.73V19.07C15.07 19.522 14.9273 19.9952 14.7223 20.3911C14.5224 20.7771 14.216 21.1805 13.8054 21.4274L12.4067 22.3302L12.3944 22.3379C10.6201 23.435 8.12 22.2285 8.12 19.98V14.63C8.12 14.4044 8.05097 14.0985 7.91928 13.7714C7.79457 13.4617 7.63489 13.1856 7.49241 13.0015L3.68009 8.99058C3.35645 8.65908 3.08503 8.22653 2.89369 7.80181C2.70495 7.38287 2.56 6.89583 2.56 6.45001V4.12Z" fill="black"/>
                </svg>

            )
        }

        default:
            return <svg></svg>
    }


}