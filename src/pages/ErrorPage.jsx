import AnimatedButton from "../components/shared/AnimatedButton";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-5 bg-black">
            <h1 className="text-[8rem] text-red-800 font-black">404</h1>
            <p className="text-[#777] -mt-10">Page not found</p>
            <AnimatedButton text={'[ Go To Home ]'} link={'/'}/>
        </div>
    );
};

export default ErrorPage;