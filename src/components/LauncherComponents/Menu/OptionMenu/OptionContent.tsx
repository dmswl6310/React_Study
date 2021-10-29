import FolderSetting from "../../pages/Option/content/FolderSetting";
import General from "../../pages/Option/content/General";
import Lis from "../../pages/Option/content/Lis";

const OptionContent = (props: {
    status: number,
    setStatus: any
}) => {
    return (
        <div>
            {(() => {
                switch(props.status){
                    case 1:
                        return <General/>;
                    case 2:
                        return <Lis/>;
                    case 3:
                        return <FolderSetting/>;
                    default:
                        return <General/>;
                }
            })()}
        </div>
    );
};

export default OptionContent;