import { supabase } from "./staysService";

/*
==========================================
Upload Featured Image
==========================================
*/

export async function uploadFeaturedImage(file) {

    if (!file) return null;

    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;

    const filePath = `featured/${fileName}`;

    const { error } = await supabase.storage
        .from("property-images")
        .upload(filePath, file);

    if (error) throw error;

    return filePath;
}


/*
==========================================
Upload Gallery Images
==========================================
*/

export async function uploadGalleryImages(files) {

    if (!files || files.length === 0) return [];

    const uploadedFiles = [];

    for (const file of files) {

        const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;

        const filePath = `gallery/${fileName}`;

        const { error } = await supabase.storage
            .from("property-images")
            .upload(filePath, file);

        if (error) throw error;

        uploadedFiles.push(filePath);

    }

    return uploadedFiles;

}


/*
==========================================
Upload ID Proof
==========================================
*/

export async function uploadIdProof(file) {

    if (!file) return null;

    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;

    const filePath = `id-proof/${fileName}`;

    const { error } = await supabase.storage
        .from("property-documents")
        .upload(filePath, file);

    if (error) throw error;

    return filePath;

}


/*
==========================================
Upload Business Document
==========================================
*/

export async function uploadBusinessDocument(file) {

    if (!file) return null;

    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;

    const filePath = `business-documents/${fileName}`;

    const { error } = await supabase.storage
        .from("property-documents")
        .upload(filePath, file);

    if (error) throw error;

    return filePath;

}

/*
==========================================
Get Public Image URL
==========================================
*/

export function getImageUrl(path) {

    if (!path) return "";

    const { data } = supabase.storage
        .from("property-images")
        .getPublicUrl(path);

    return data.publicUrl;

}
/*
==========================================
Get Document URL
==========================================
*/

export function getDocumentUrl(path) {

    if (!path) return "";

    const { data } = supabase.storage
        .from("property-documents")
        .getPublicUrl(path);

    return data.publicUrl;

}