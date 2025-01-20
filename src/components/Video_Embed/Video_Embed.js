const VideoEmbed = (props) => {
    let { width, height, src, title, frameborder, allow, allowfullscreen, style} = props;
    if (width == null) width="100%";
    if (height == null) height=315;
    if (frameborder == null) frameborder=0;
    if (allow == null) allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    if (title == null) title="Embedded video player";
    if (allowfullscreen == null) allowfullscreen="allowfullscreen";

    return <iframe 
        width={width}
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