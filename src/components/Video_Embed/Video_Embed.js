const VideoEmbed = (props) => {
    let { height, src, title, frameborder, allow, allowfullscreen, style} = props;
    return <iframe 
        width="100%" 
        height={height} 
        src={src} 
        title={title} 
        frameborder={frameborder} 
        allow={allow} 
        allowfullscreen={allowfullscreen} 
        style={style}> 
    </iframe>;
}

export default VideoEmbed;