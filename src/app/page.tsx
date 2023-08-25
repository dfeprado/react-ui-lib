import Button from "@/components/buttons/button.component";
import IconButton from "@/components/buttons/icon-button.component";
import { TvIcon } from "@heroicons/react/20/solid";

export default function Page() {
    const tvIcon = <TvIcon className="h-5 w-5" />

    return (
        <>
            <div className="flex flex-col gap-5 justify-center items-center h-screen">
                <Button effect="darken" className="bg-blue-300">
                    <p>TV</p>
                    {tvIcon}
                </Button>
                
                <Button effect="darken" 
                    className="bg-white"
                    disabled
                    raised={true}>
                    <p>TV</p>
                    {tvIcon}
                </Button>

                <IconButton
                    effect="lighten"
                    className="bg-blue-500">
                    {tvIcon}
                </IconButton>
            </div>
        </>
    );
}