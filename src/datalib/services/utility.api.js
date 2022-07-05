import {Platform} from 'react-native';
import getApiUri from '../api.util';
import sInfoUtil from '../../utils/sInfo.util';

/*
 * This function is used to upload a image
 * @author Didijobs <rgy713>
 */
export const uploadFile = _image =>
  new Promise(async function (resolve, reject) {
    const jwt = await sInfoUtil.fetch('JWT');
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${jwt}`);

    var formdata = new FormData();
    formdata.append(
      'image',
      {
        uri: Platform.OS === 'ios' ? `file:///${_image.path}` : _image.path,
        type: _image.mime,
        name: _image.path.split('/').pop(),
      },
      'myfile.png',
    );

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(getApiUri('/utility/upload-file'), requestOptions)
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
