import { GCWorkoutId, GarminDomain } from './types';

export class UrlClass {
    private domain: GarminDomain;
    GC_MODERN: string;
    GARMIN_SSO_ORIGIN: string;
    GC_API: string;
    constructor(domain: GarminDomain = 'garmin.com') {
        this.domain = domain;
        this.GC_MODERN = `https://connect.${this.domain}/modern`;
        this.GARMIN_SSO_ORIGIN = `https://sso.${this.domain}`;
        this.GC_API = `https://connectapi.${this.domain}`;
    }
    get GARMIN_SSO() {
        return `${this.GARMIN_SSO_ORIGIN}/sso`;
    }
    get GARMIN_SSO_EMBED() {
        return `${this.GARMIN_SSO_ORIGIN}/sso/embed`;
    }
    get BASE_URL() {
        return `${this.GC_MODERN}/proxy`;
    }
    get SIGNIN_URL() {
        return `${this.GARMIN_SSO}/signin`;
    }
    get LOGIN_URL() {
        return `${this.GARMIN_SSO}/login`;
    }
    get OAUTH_URL() {
        return `${this.GC_API}/oauth-service/oauth`;
    }
    get USER_SETTINGS() {
        return `${this.GC_API}/userprofile-service/userprofile/user-settings/`;
    }
    get USER_PROFILE() {
        return `${this.GC_API}/userprofile-service/socialProfile`;
    }
    get ACTIVITIES() {
        return `${this.GC_API}/activitylist-service/activities/search/activities`;
    }
    get ACTIVITY() {
        return `${this.GC_API}/activity-service/activity/`;
    }
    get STAT_ACTIVITIES() {
        return `${this.GC_API}/fitnessstats-service/activity`;
    }
    get DOWNLOAD_ZIP() {
        return `${this.GC_API}/download-service/files/activity/`;
    }
    get DOWNLOAD_GPX() {
        return `${this.GC_API}/download-service/export/gpx/activity/`;
    }
    get DOWNLOAD_TCX() {
        return `${this.GC_API}/download-service/export/tcx/activity/`;
    }
    get DOWNLOAD_KML() {
        return `${this.GC_API}/download-service/export/kml/activity/`;
    }
    get UPLOAD() {
        return `${this.GC_API}/upload-service/upload/`;
    }
    get IMPORT_DATA() {
        return `${this.GC_API}/modern/import-data`;
    }
    WORKOUT(id?: GCWorkoutId) {
        if (id) {
            return `${this.GC_API}/workout-service/workout/${id}`;
        }
        return `${this.GC_API}/workout-service/workout`;
    }
    get WORKOUTS() {
        return `${this.GC_API}/workout-service/workouts`;
    }
}
