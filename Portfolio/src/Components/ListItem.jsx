const ListItem = ({ link = null, content, ...props }) => {
  return (
    <li>
      <a href={link} {...props}>
        {content}
      </a>
    </li>
  );
};

export default ListItem;
