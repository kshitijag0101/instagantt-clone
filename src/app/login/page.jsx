"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HandleLogin } from "@/api/UserAPI";
import useAuthContext from "@/hooks/use-auth-hooks";

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { isLoggedIn, setIsLoggedIn } = useAuthContext();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        const query = window.location.href.split("?");
        if (query.length > 1) {
            const token = query[1].split("&")[0].split("=")[1];
            const userId = query[1].split("&")[1].split("=")[1];
            setIsLoggedIn(true);
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            router.push("/");
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await HandleLogin(email, password, router, setIsLoggedIn);
    };

    return (
        !isLoggedIn && (
            <div className="h-screen bg-[url('/img/hero.jpg')] bg-cover">
                <div className="flex justify-center h-full">
                    <div className="bg-white h-full w-[28%] px-12">
                        <div className="mx-auto w-fit py-10">
                            <svg
                                width="173"
                                height="44"
                                viewBox="0 0 173 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <mask
                                    id="mask0_14078_20947"
                                    style={{ maskType: "alpha" }}
                                    maskUnits="userSpaceOnUse"
                                    x="2"
                                    y="2"
                                    width="40"
                                    height="40"
                                >
                                    <path
                                        d="M2.64228 11.4796C2.99802 6.90895 6.60329 3.30368 11.174 2.94795C14.5893 2.68213 18.5292 2.44434 21.6942 2.44434C24.8593 2.44434 28.7991 2.68213 32.2145 2.94795C36.7852 3.30368 40.3904 6.90895 40.7462 11.4796C41.012 14.895 41.2498 18.8348 41.2498 21.9999C41.2498 25.1649 41.012 29.1048 40.7462 32.5201C40.3904 37.0908 36.7852 40.6961 32.2145 41.0518C28.7991 41.3176 24.8593 41.5554 21.6942 41.5554C18.5292 41.5554 14.5893 41.3176 11.174 41.0518C6.60329 40.6961 2.99802 37.0908 2.64228 32.5201C2.37647 29.1048 2.13867 25.1649 2.13867 21.9999C2.13867 18.8348 2.37647 14.895 2.64228 11.4796Z"
                                        fill="#1287FB"
                                    />
                                </mask>
                                <g mask="url(#mask0_14078_20947)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.174 2.94795C6.60329 3.30368 2.99802 6.90895 2.64228 11.4796C2.37647 14.895 2.13867 18.8348 2.13867 21.9999C2.13867 25.1649 2.37647 29.1048 2.64228 32.5201C2.99802 37.0908 6.60329 40.6961 11.174 41.0518C14.5893 41.3176 18.5292 41.5554 21.6942 41.5554C24.8593 41.5554 28.7991 41.3176 32.2145 41.0518C36.7852 40.6961 40.3904 37.0908 40.7462 32.5201C41.012 29.1048 41.2498 25.1649 41.2498 21.9999C41.2498 18.8348 41.012 14.895 40.7462 11.4796C40.3904 6.90895 36.7852 3.30368 32.2145 2.94795C28.7991 2.68213 24.8593 2.44434 21.6942 2.44434C18.5292 2.44434 14.5893 2.68213 11.174 2.94795ZM34.8332 21.6944C34.8332 20.8507 34.1492 20.1667 33.3054 20.1667H17.4165C16.5727 20.1667 15.8887 20.8507 15.8887 21.6944C15.8887 22.5382 16.5727 23.2222 17.4165 23.2222H33.3054C34.1492 23.2222 34.8332 22.5382 34.8332 21.6944ZM24.7498 12.2222C25.5936 12.2222 26.2776 12.9062 26.2776 13.75C26.2776 14.5938 25.5936 15.2778 24.7498 15.2778L10.0832 15.2778C9.2394 15.2778 8.55539 14.5938 8.55539 13.75C8.55539 12.9062 9.2394 12.2222 10.0832 12.2222L24.7498 12.2222ZM34.8332 29.6389C34.8332 28.7951 34.1492 28.1111 33.3054 28.1111H17.4165C16.5727 28.1111 15.8887 28.7951 15.8887 29.6389C15.8887 30.4827 16.5727 31.1667 17.4165 31.1667H33.3054C34.1492 31.1667 34.8332 30.4827 34.8332 29.6389Z"
                                        fill="#0C1258"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M26.2778 21.6938C26.2778 20.85 25.5938 20.166 24.75 20.166H33.3056C34.1493 20.166 34.8333 20.85 34.8333 21.6938C34.8333 22.5376 34.1493 23.2216 33.3056 23.2216L24.7502 23.2216C25.5939 23.2214 26.2778 22.5375 26.2778 21.6938Z"
                                        fill="#55598A"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M26.2778 29.6381C26.2778 28.7944 25.5938 28.1104 24.75 28.1104H33.3056C34.1493 28.1104 34.8333 28.7944 34.8333 29.6381C34.8333 30.4819 34.1493 31.1659 33.3056 31.1659L24.7502 31.1659C25.5939 31.1658 26.2778 30.4818 26.2778 29.6381Z"
                                        fill="#55598A"
                                    />
                                </g>
                                <path
                                    d="M52.958 11.8652H55.2565V30.3592H52.958V11.8652Z"
                                    fill="#0C1258"
                                />
                                <path
                                    d="M65.1285 16.7265C66.7666 16.7265 68.0788 17.2197 69.0651 18.206C70.0691 19.1924 70.5711 20.7423 70.5711 22.8559V30.3592H68.4046V22.988C68.4046 21.5966 68.0876 20.5398 67.4535 19.8176C66.837 19.0779 65.9388 18.708 64.7587 18.708C63.4905 18.708 62.4953 19.1483 61.7732 20.029C61.0511 20.9097 60.69 22.1074 60.69 23.6221V30.3592H58.5235V16.885H60.3994L60.69 18.708C61.7116 17.387 63.1911 16.7265 65.1285 16.7265Z"
                                    fill="#0C1258"
                                />
                                <path
                                    d="M75.0241 25.9207C75.0593 26.7309 75.4116 27.3914 76.0809 27.9022C76.7678 28.413 77.6484 28.6683 78.7229 28.6683C79.674 28.6683 80.4402 28.4834 81.0214 28.1135C81.6202 27.726 81.9197 27.2241 81.9197 26.6076C81.9197 26.0792 81.7788 25.6741 81.497 25.3923C81.2151 25.1105 80.8453 24.9167 80.3873 24.811C79.947 24.7053 79.3129 24.5997 78.4851 24.494C77.3226 24.3531 76.3715 24.1681 75.6317 23.9392C74.892 23.7102 74.2931 23.3491 73.8352 22.8559C73.3772 22.3452 73.1482 21.6494 73.1482 20.7688C73.1482 19.9762 73.3684 19.2716 73.8087 18.6552C74.2667 18.0387 74.8832 17.5631 75.6581 17.2285C76.4331 16.8762 77.305 16.7001 78.2737 16.7001C79.8589 16.7001 81.1447 17.07 82.131 17.8097C83.135 18.5495 83.6898 19.6063 83.7955 20.9801H81.6291C81.541 20.2756 81.1975 19.6944 80.5987 19.2364C79.9998 18.7785 79.2513 18.5495 78.353 18.5495C77.4371 18.5495 76.6973 18.7432 76.1337 19.1307C75.5701 19.5006 75.2883 19.9938 75.2883 20.6102C75.2883 21.0682 75.4204 21.4205 75.6846 21.667C75.9488 21.9136 76.2834 22.081 76.6885 22.169C77.1112 22.2571 77.7453 22.354 78.5908 22.4596C79.7709 22.6006 80.7396 22.7943 81.497 23.0409C82.2719 23.2875 82.8884 23.6838 83.3464 24.2298C83.8219 24.7758 84.0597 25.5156 84.0597 26.4491C84.0597 27.2593 83.8219 27.9726 83.3464 28.5891C82.8708 29.2055 82.2279 29.6811 81.4177 30.0158C80.6075 30.3504 79.7092 30.5177 78.7229 30.5177C76.9615 30.5177 75.5437 30.1126 74.4692 29.3024C73.4124 28.4922 72.8752 27.365 72.8576 25.9207H75.0241Z"
                                    fill="#0C1258"
                                />
                                <path
                                    d="M87.4156 18.8665H84.985V16.885H87.4156V13.107H89.5821V16.885H92.9903V18.8665H89.5821V26.8189C89.5821 27.3826 89.6878 27.7877 89.8991 28.0343C90.1281 28.2632 90.5156 28.3777 91.0616 28.3777H93.413V30.3592H90.9295C89.6613 30.3592 88.7543 30.0774 88.2082 29.5138C87.6798 28.9502 87.4156 28.0607 87.4156 26.8454V18.8665Z"
                                    fill="#0C1258"
                                />
                                <path
                                    d="M107.35 28.3777V30.3592H106.161C105.298 30.3592 104.682 30.1831 104.312 29.8308C103.942 29.4786 103.748 28.959 103.731 28.272C102.691 29.7692 101.185 30.5177 99.2128 30.5177C97.7157 30.5177 96.5091 30.1655 95.5933 29.4609C94.695 28.7564 94.2458 27.7965 94.2458 26.5812C94.2458 25.2249 94.7038 24.1858 95.6197 23.4636C96.5532 22.7415 97.9006 22.3804 99.6619 22.3804H103.625V21.4557C103.625 20.575 103.325 19.8881 102.727 19.3949C102.145 18.9018 101.326 18.6552 100.27 18.6552C99.3361 18.6552 98.5611 18.8665 97.9446 19.2892C97.3458 19.6944 96.9759 20.2404 96.835 20.9273H94.6686C94.8271 19.6063 95.4083 18.5759 96.4123 17.8362C97.4338 17.0964 98.7548 16.7265 100.375 16.7265C102.101 16.7265 103.431 17.1492 104.365 17.9947C105.316 18.8225 105.791 20.0202 105.791 21.5878V27.4002C105.791 28.0519 106.091 28.3777 106.69 28.3777H107.35ZM103.625 24.2034H99.4506C97.4427 24.2034 96.4387 24.9519 96.4387 26.4491C96.4387 27.1184 96.7029 27.6556 97.2313 28.0607C97.7597 28.4658 98.473 28.6683 99.3713 28.6683C100.692 28.6683 101.731 28.3249 102.489 27.638C103.246 26.9334 103.625 26.0087 103.625 24.8639V24.2034Z"
                                    fill="#0C1258"
                                />
                                <path
                                    d="M121.803 16.885V29.6987C121.803 33.7674 119.575 35.8017 115.119 35.8017C113.375 35.8017 111.948 35.4054 110.839 34.6128C109.747 33.8202 109.113 32.693 108.936 31.2311H111.156C111.332 32.0765 111.781 32.7282 112.503 33.1862C113.225 33.6441 114.15 33.8731 115.277 33.8731C118.183 33.8731 119.636 32.4552 119.636 29.6195V28.0343C118.668 29.6899 117.127 30.5177 115.013 30.5177C113.762 30.5177 112.644 30.2447 111.658 29.6987C110.689 29.1527 109.923 28.3601 109.359 27.3209C108.813 26.2817 108.54 25.0488 108.54 23.6221C108.54 22.2659 108.813 21.0682 109.359 20.029C109.923 18.9898 110.698 18.1796 111.684 17.5984C112.67 17.0171 113.78 16.7265 115.013 16.7265C116.105 16.7265 117.039 16.9467 117.813 17.387C118.588 17.8097 119.196 18.4174 119.636 19.21L119.927 16.885H121.803ZM115.224 28.5891C116.087 28.5891 116.854 28.3865 117.523 27.9814C118.21 27.5587 118.738 26.9775 119.108 26.2377C119.478 25.4803 119.663 24.6261 119.663 23.675C119.663 22.7062 119.478 21.8432 119.108 21.0858C118.738 20.3108 118.21 19.712 117.523 19.2892C116.854 18.8665 116.087 18.6552 115.224 18.6552C113.886 18.6552 112.802 19.1219 111.975 20.0554C111.164 20.9713 110.759 22.1602 110.759 23.6221C110.759 25.084 111.164 26.2817 111.975 27.2152C112.802 28.1311 113.886 28.5891 115.224 28.5891Z"
                                    fill="#0C1258"
                                />
                                <path
                                    d="M137.356 28.3777V30.3592H136.168C135.304 30.3592 134.688 30.1831 134.318 29.8308C133.948 29.4786 133.755 28.959 133.737 28.272C132.698 29.7692 131.192 30.5177 129.219 30.5177C127.722 30.5177 126.515 30.1655 125.6 29.4609C124.701 28.7564 124.252 27.7965 124.252 26.5812C124.252 25.2249 124.71 24.1858 125.626 23.4636C126.559 22.7415 127.907 22.3804 129.668 22.3804H133.631V21.4557C133.631 20.575 133.332 19.8881 132.733 19.3949C132.152 18.9018 131.333 18.6552 130.276 18.6552C129.342 18.6552 128.567 18.8665 127.951 19.2892C127.352 19.6944 126.982 20.2404 126.841 20.9273H124.675C124.833 19.6063 125.415 18.5759 126.419 17.8362C127.44 17.0964 128.761 16.7265 130.382 16.7265C132.108 16.7265 133.437 17.1492 134.371 17.9947C135.322 18.8225 135.798 20.0202 135.798 21.5878V27.4002C135.798 28.0519 136.097 28.3777 136.696 28.3777H137.356ZM133.631 24.2034H129.457C127.449 24.2034 126.445 24.9519 126.445 26.4491C126.445 27.1184 126.709 27.6556 127.238 28.0607C127.766 28.4658 128.479 28.6683 129.378 28.6683C130.699 28.6683 131.738 28.3249 132.495 27.638C133.253 26.9334 133.631 26.0087 133.631 24.8639V24.2034Z"
                                    fill="#0C1258"
                                />
                                <path
                                    d="M145.627 16.7265C147.265 16.7265 148.577 17.2197 149.563 18.206C150.567 19.1924 151.069 20.7423 151.069 22.8559V30.3592H148.903V22.988C148.903 21.5966 148.586 20.5398 147.952 19.8176C147.335 19.0779 146.437 18.708 145.257 18.708C143.989 18.708 142.994 19.1483 142.272 20.029C141.549 20.9097 141.188 22.1074 141.188 23.6221V30.3592H139.022V16.885H140.898L141.188 18.708C142.21 17.387 143.689 16.7265 145.627 16.7265Z"
                                    fill="#0C1258"
                                />
                                <path
                                    d="M154.73 18.8665H152.299V16.885H154.73V13.107H156.896V16.885H160.304V18.8665H156.896V26.8189C156.896 27.3826 157.002 27.7877 157.213 28.0343C157.442 28.2632 157.83 28.3777 158.376 28.3777H160.727V30.3592H158.244C156.976 30.3592 156.068 30.0774 155.522 29.5138C154.994 28.9502 154.73 28.0607 154.73 26.8454V18.8665Z"
                                    fill="#0C1258"
                                />
                                <path
                                    d="M162.268 13.107H164.435V16.885H167.843V18.8665H164.435V26.8189C164.435 27.3826 164.541 27.7877 164.752 28.0343C164.981 28.2632 165.368 28.3777 165.914 28.3777H168.266V30.3592H165.782C164.514 30.3592 163.607 30.0774 163.061 29.5138C162.533 28.9502 162.268 28.0607 162.268 26.8454V13.107Z"
                                    fill="#0C1258"
                                />
                            </svg>
                        </div>
                        <h2 className="text-black text-2xl mt-4 mb-4">Login</h2>
                        <p className="text-[#61657d] text-sm mb-6">
                            User your email address to access your account
                        </p>
                        <div className="mb-6 hover:text-black text-[#757575]">
                            <Link
                                href="http://localhost:5000/auth/google"
                                className=""
                            >
                                <div className="flex justify-center gap-4 border rounded px-10 py-1">
                                    <div className="mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            id="google"
                                            height={20}
                                            width={20}
                                        >
                                            <path
                                                fill="#fbbb00"
                                                d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                                            ></path>
                                            <path
                                                fill="#518ef8"
                                                d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                                            ></path>
                                            <path
                                                fill="#28b446"
                                                d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                                            ></path>
                                            <path
                                                fill="#f14336"
                                                d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <h2 className=" font-normal">
                                        Sign In With Google
                                    </h2>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center gap-2 mb-6">
                            <hr className="text-[#cccccc] w-32 mt-3" />
                            <h2>Or</h2>
                            <hr className="text-[#cccccc] w-32 mt-3" />
                        </div>
                        <label
                            htmlFor="Email"
                            className="text-[#61657d] text-sm"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleEmailChange}
                            className="w-full h-9 mb-2 border rounded-md boder-gray-300 focus:ring-1 focus:ring-blue-300 outline-none px-2"
                        />
                        <label
                            htmlFor="Password"
                            className="text-[#61657d] text-sm"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={handlePasswordChange}
                            className="w-full h-9 mb-4 border rounded-md boder-gray-300 focus:ring-1 focus:ring-blue-300 outline-none px-2"
                        />
                        <button
                            className="mb-6 w-full py-2 rounded-md text-white font-medium bg-[#006dcc] hover:bg-[#0044cc]"
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                        <div className="flex justify-center gap-2 mb-6">
                            <hr className="text-[#cccccc] w-32 mt-3" />
                            <h2>Or</h2>
                            <hr className="text-[#cccccc] w-32 mt-3" />
                        </div>
                        <div className="text-center">
                            <Link href="/" className="text-[#0088cc]">
                                Reset your password
                            </Link>
                        </div>
                    </div>
                    <div className="bg-[#f5f8fb] h-full w-[28%] px-12">
                        <div className="my-72">
                            <h2 className="text-2xl text-[#61657d] font-normal text-center mb-4">
                                Don't have an account?
                            </h2>
                            <div className="text-center">
                                <Link
                                    href="/signup"
                                    className="px-4 py-2 bg-[#b541c3] font-medium text-white rounded-md"
                                >
                                    Sign Up for free
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}