import React, { Component } from 'react';
import {ListItem,ListInfo} from '../style';

class List extends Component {
    render() {
        return (
            <ListItem>
                <img src="https://upload-images.jianshu.io/upload_images/16623634-55ed3b964aff138e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
                <ListInfo>
                    <h3 className="title">村上春树语录：没有人喜欢孤独，只是不愿失望</h3>
                    <p className="desc">你要做一个不动声色的大人了。不准情绪化，不准偷偷想念，不准回头看。去过自己另外的生活。你要听话，不是所有的鱼都会生活在同一片海里。 -- 村上春树 《舞！舞！舞！》
                     总之岁月漫长，然而值得等待。 -- 村上春树 《如果我们的语言是威士忌》</p>
                </ListInfo>
            </ListItem>
        )
    }
}
export default List;