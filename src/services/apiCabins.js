import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  let { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.err(error);
    throw new Error('Cabins could not be loaded!');
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');
  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //Create cabin
  let query = supabase.from('cabins');
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //Update cabin
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error('Cabin could not be created!');
  }

  if (hasImagePath) return data;

  //Upload image
  const { error: storageError } = await supabase.storage.from('cabin-images').upload(imageName, newCabin.image, {
    cacheControl: '3600',
    upsert: false,
  });

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.log(storageError);
    throw new Error('Cabin image could not uploaded and cabin was not created!');
  }

  return data;
}

export async function updateCabin(id) {
  const { data, error } = await supabase.from('cabins').update({ other_column: 'otherValue' }).eq('id', id).select();

  if (error) {
    console.log(error);
    throw new Error('Cabin could not be updated!');
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('Cabin could not be deleted!');
  }

  return data;
}
