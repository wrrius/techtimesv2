"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Homepage = exports.homepageSchema = void 0;
var mongoose_1 = require("mongoose");
var homepageSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        default: null,
        required: false,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        //type: Category,
        required: true,
    },
    user: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: false,
        },
    },
    position: {
        //type: Position,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    },
});
exports.homepageSchema = homepageSchema;
homepageSchema.statics.build = function (attrs) {
    return new Homepage(attrs);
};
mongoose_1.default.deleteModel("Homepage");
var Homepage = mongoose_1.default.model("Homepage", homepageSchema);
exports.Homepage = Homepage;
