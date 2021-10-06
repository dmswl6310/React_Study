const ImageButton = (
    props: {
        src: string,
        onClick?: React.MouseEventHandler<HTMLImageElement>
    }
) => {
    return (
        <div style={{display:'inline-block', marginRight: 5}}>
            <img onClick={props.onClick} src={props.src} alt="" width="15" height="15"/>
        </div>
    );
};

export default ImageButton;