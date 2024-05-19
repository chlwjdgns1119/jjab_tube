import { diskStorage } from "multer";
import { v4 as uuid } from 'uuid';
import { extname } from "path";

export const Video_MulterOptions = {
    storage: diskStorage({
        destination: function (req, file, cb){
            cb(null, '/workspaces/jjab_tube/jjab_tube/src/public/videos');
        },
        filename: function (req, file, cb) {
            cb(null, `${uuid()}${extname(file.originalname)}`);
        }
    })
}