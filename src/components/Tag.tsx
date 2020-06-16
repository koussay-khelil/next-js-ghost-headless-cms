const ourTags = [`tech it easy`, `inside gomycode`, `meet a founder`, `en profondeur`, `around gomytech`, `random mirror`, `blog`, 'reskill upskill']
const Tag = ({post}) => {
    return (
        <span className="tagged">{post.tags.filter(r => ourTags.includes(r.name))[0] && post.tags.filter(r => ourTags.includes(r.name))[0].name} </span>
    )
}

export default Tag;
