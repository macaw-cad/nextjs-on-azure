import Cache, { CacheInstance } from 'sync-disk-cache';
import os from 'os';
import { EditingData } from '../../../node_modules/@sitecore-jss/sitecore-jss-nextjs';

/**
 * Defines an editing data cache implementation
 */
export interface EditingDataCache {
    set(key: string, editingData: EditingData): void;
    get(key: string): EditingData | undefined;
}

export class EditingDataDiskCache implements EditingDataCache {
    private cache: CacheInstance;

    constructor(tmpDir: string = os.tmpdir()) {
        this.cache = new Cache('editing-data', { location: tmpDir });
    }

    set(key: string, editingData: EditingData): void {
        try {
            const filePath = this.cache.set(key, JSON.stringify(editingData));

            if (!filePath || filePath.length === 0) {
                throw new Error(`Editing data cache not set for key ${key} at ${this.cache.root}`);
            }
        } catch (e) {
            console.error("setting cache failed", JSON.stringify(e));
        }
    }

    get(key: string): EditingData | undefined {
        const entry = this.cache.get(key);
        if (!entry.isCached) {
            console.warn(`Editing data cache miss for key ${key} at ${this.cache.root}`);
            return undefined;
        }
        const data = JSON.parse(entry.value);
        this.cache.remove(key);
        return data as EditingData;
    }
}

/** EditingDataDiskCache singleton */
export const editingDataDiskCache = new EditingDataDiskCache();
