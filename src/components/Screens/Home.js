import { Fragment } from "react";

import ContentImageBlock from "../Layout/Blocks/ContentImageBlock";
import ContentOnlyBlock from "../Layout/Blocks/ContentOnlyBlock";
import ImageBlock from "../Layout/Blocks/ImageBlock";

import class319 from '../../assets/class319WBQ.JPG';
import chatMossScreenshot from '../../assets/chat-moss-screenshot.jpg';

const Home = () => {
    return(
        <Fragment>
            <ImageBlock title="New Release!" image={chatMossScreenshot}>There's no products on this site yet - I don't know what you're talking about. Come back when the site's finished.</ImageBlock>
            <ContentImageBlock title="Welcome!" image={class319}>Nunc tincidunt arcu quis diam pharetra laoreet. Proin eget nulla lorem. Nullam et sagittis dui, nec vestibulum diam. Proin nec finibus justo. Donec ac vehicula dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet vehicula mauris. Quisque tempor convallis malesuada. Praesent sed velit id lorem ullamcorper interdum a et ligula. Cras gravida pretium odio, et faucibus sem blandit vitae. Pellentesque tincidunt fermentum nunc ut consequat. Sed varius, dolor ac vehicula egestas, enim ipsum congue ante, vitae dictum ligula arcu nec neque. Curabitur in quam ac nibh varius blandit et quis lorem. Duis at congue mi, et convallis velit. Quisque condimentum ante eu purus semper finibus. Morbi pellentesque eget mauris et finibus. Fusce rutrum purus et est tincidunt, at condimentum felis dignissim. Duis tempor lobortis porta. Cras ultricies est dui, et auctor nulla sagittis at. Nulla lobortis neque sapien, ut egestas nisl lobortis nec.</ContentImageBlock>
            <ContentOnlyBlock title="My Scenarios">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus ligula vitae justo placerat bibendum. Cras ornare arcu ut velit mollis, nec suscipit erat eleifend. Praesent ac convallis odio, non interdum nunc. Aenean venenatis commodo pellentesque. Ut lectus tortor, aliquet nec libero id, accumsan lobortis augue. Quisque iaculis arcu nec dolor dapibus sodales. Fusce egestas convallis congue. Vestibulum sit amet dolor non nibh sollicitudin convallis sit amet ac nunc. Sed finibus ex eu efficitur facilisis. Aliquam tempus sem non odio suscipit, at tincidunt nibh consectetur. Nunc purus magna, venenatis at ex id, scelerisque fermentum metus. Vivamus non luctus mi. Phasellus maximus leo eu feugiat mattis. Mauris lorem eros, scelerisque sed orci sit amet, commodo egestas lectus. Sed eu augue vulputate, congue neque quis, pulvinar massa.Mauris in risus vitae urna pharetra pulvinar nec vel diam. Maecenas fringilla scelerisque massa a varius. Phasellus quis risus sed sem porta bibendum.</ContentOnlyBlock>
        </Fragment>
    );
};

export default Home;