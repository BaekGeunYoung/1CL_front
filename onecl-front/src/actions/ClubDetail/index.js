import * as types from './ActionTypes';

export const getDocumentListRequest = (id) => {
    return {
        type : types.GET_DOCUMENT_LIST_REQUEST,
        id
    }
};

export const getMemberListRequest = (id) => {
    return {
        type : types.GET_MEMBER_LIST_REQUEST,
        id
    }
};

export const getInfoPostRequest = (id) => {
    return {
        type : types.GET_INFO_POST_REQUEST,
        id
    }
};

export const getAuthLevelRequest = (id) => {
    return {
        type : types.GET_AUTH_LEVEL_REQUEST,
        id
    }
};

export const changeStatus = (flag) => {
    return {
        type : types.CHANGE_STATUS,
        flag
    }
};

export const updateDocumentList = (documentList) => {
    return {
        type: types.UPDATE_DOCUMENT_LIST,
        documentList,
    }
};

export const updateMemberList = (memberList) => {
    return {
        type: types.UPDATE_MEMBER_LIST,
        memberList,
    }
};

export const updateInfoPost = (infoPost) => {
    return {
        type: types.UPDATE_INFO_POST,
        infoPost
    }
};
