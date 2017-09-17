import "reflect-metadata";
import * as assert from "assert";
import {createConnection} from "../../../src/index";
import * as rimraf from "rimraf";
import {dirname} from "path";

describe("github issues > #799 sqlite: 'database' path should be created", () => {

    const path = `${__dirname}/tmp/sqlitedb.db`;
    const cleanup = (done: () => void) => {
        rimraf(dirname(path), () => {
            return done();
        });
    };

    before(cleanup);
    after(cleanup);

    it("should create the whole path to database file", async function () {
        const connection = await createConnection({
            "name": "sqlite",
            "type": "sqlite",
            "database": path
        });

        assert.strictEqual(connection.isConnected, true);
    });

});
