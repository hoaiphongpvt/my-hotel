import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, editId }) => createEditCabin(newCabinData, editId),
    onSuccess: () => {
      toast.success('Cabin successfully edited.');
      queryClient.invalidateQueries({
        queryKey: ['cabin'],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { editCabin, isEditing };
}
