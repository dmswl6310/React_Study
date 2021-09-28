const ImageButton = (
    props: {
        src: string,
        onClick: any
    }
) => {
    return (
        <img onClick={props.onClick} src={props.src} alt="" width="15" height="15"/>
    );
};

export default ImageButton;