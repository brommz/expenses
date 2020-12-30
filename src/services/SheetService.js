export default class SheetService {

    constructor(clientId, spreadsheetId) {
        this.clientId = clientId;
        this.spreadsheetId = spreadsheetId;
    }

    // todo use observable - rxjs
    login(signedInChangedCallback) {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    discoveryDocs: [
                        "https://sheets.googleapis.com/$discovery/rest?version=v4"
                    ],
                    clientId: this.clientId,
                    scope:
                        "https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.metadata.readonly"
                })
                .then(() => {
                    this.getAuthInstance()
                        .isSignedIn.listen(signedInChangedCallback);
                    signedInChangedCallback(
                        this.getAuthInstance().isSignedIn.get()
                    );
                });
        });
    }

    getAuthInstance() {
        return window.gapi.auth2
            .getAuthInstance();
    }

    append(value) {
        return window.gapi.client.sheets.spreadsheets.values.append({
            spreadsheetId: this.spreadsheetId,
            range: "Expenses!A1",
            valueInputOption: "USER_ENTERED",
            insertDataOption: "INSERT_ROWS",
            values: [value]
        });
    }

    update(id, value) {
        return window.gapi.client.sheets.spreadsheets.values.update({
            spreadsheetId: this.spreadsheetId,
            range: id,
            valueInputOption: "USER_ENTERED",
            values: [value]
        });
    }

    delete(row) {
        return window.gapi.client.sheets.spreadsheets
            .batchUpdate({
                spreadsheetId: this.spreadsheetId,
                resource: {
                    requests: [
                        {
                            deleteDimension: {
                                range: {
                                    sheetId: 0,
                                    dimension: "ROWS",
                                    startIndex: row - 1,
                                    endIndex: row
                                }
                            }
                        }
                    ]
                }
            });
    }

    load() {
        return window.gapi.client.sheets.spreadsheets.values
            .batchGet({
                spreadsheetId: this.spreadsheetId,
                ranges: [
                    "Data!A2:A200",
                    "Data!E2:E200",
                    "Data!F2:F200",
                    "Data!G2:G200",
                    "Expenses!A2:F",
                    "Current!H1",
                    "Previous!H1"
                ]
            })
    }
}
