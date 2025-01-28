import TopImage from '@/assets/top.png';

export const Top = () => {
    return (
        <section 
            className="
                pt-10 
                relative 
                h-screen 
                bg-center 
                bg-cover 
                bg-no-repeat
                md:h-[100vh]
                sm:h-[50vw]
                sm:w-auto
                bg-[url('../assets/top.png')]"
        ></section>
    );
};
