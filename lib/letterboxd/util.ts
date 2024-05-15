import { executeKanpai, KanpaiExecutable, KanpaiContext } from 'kanpai-scraper';
import get from '../axios';

export const LETTERBOXD_ORIGIN = 'https://letterboxd.com';
export const LETTERBOXD_NEXT_PAGE_REGEX = /\/page\/(\d+)/;

// Function to extract and convert the number of watchers
export const extractWatchers = () => (val?: string): number => {
    if (!val) {
        return 0;
    }
    const match = val.match(/Watched by ([\d,]+)&nbsp;members/);
    if (match && match[1]) {
        // Remove commas and convert to integer
        return parseInt(match[1].replace(/,/g, ''), 10);
    }
    return 0;
};

export const splitMatches = (delimiter: string = ',') => (val?: string | string[]): string[] => {
    if (!val) {
        return [];
    }
    
    if (Array.isArray(val)) {
        console.log("Director type: Array", val);
        // If it's already an array, return it as-is (or optionally process each element)
        return val.map(item => item.trim());
    } else {
        console.log("Director type: String", val);
        // If it's a string, split by the delimiter and trim each element
        return val.split(delimiter).map(item => item.trim());
    }
};

export const getFirstMatch = (regex: RegExp) => (val?: string): string => {
    if(!val){
        return '';
    }
    const match = val.match(regex);
    if(!match || match.length < 2){
        return '';
    }
    return match[1];
};

export const getKanpai = async<T = any> (url: string, executable: KanpaiExecutable) => {
    const data = await get(url);
    const context = new KanpaiContext(data);
    return executeKanpai<T>(context, executable, {
        strict: false
    });
};

/**
 * Ensures slug starts and ends with a single slash.
 */
export const normalizeSlug = (slug: string): string => '/' + slug.replace(/^\/*(.*?)\/*$/, '$1') + '/';
