var XLSX = require('xlsx')

const excelFoldertoJson = function (excelFolder, pageName) {
    return new Promise(function (resolve, reject) {
        let pageString = pageName.toString();
        let workBook = null;
        let jsonData = null;
        let jsonXMLData = new Array();
        const reader = new FileReader();
        const file = excelFolder.target.files[0];
        reader.onload = event => {
            const data = reader.result;
            workBook = XLSX.read(data, { type: 'binary' });
            jsonData = workBook.SheetNames.reduce((initial, name) => {
                const sheet = workBook.Sheets[name];
                initial[name] = XLSX.utils.sheet_to_json(sheet);
                return initial;
            }, {});
            jsonXMLData = jsonData[pageString];
            resolve (jsonXMLData);
        };
        reader.readAsBinaryString(file);
    });

}
export default excelFoldertoJson;
