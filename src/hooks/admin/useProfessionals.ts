import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    getProfessionals,
    getProfessionalById,
    createProfessional,
    updateProfessional,
    activateProfessional,
    deactivateProfessional,
    deleteProfessional,
} from "@/services/admin/professionalService";
import {
    ProfessionalCreatePayload,
    ProfessionalUpdatePayload,
} from "@/types/admin/professional";
import { useToast } from "@/hooks/use-toast";

export const useProfessionals = () => {
    return useQuery({
        queryKey: ["professionals"],
        queryFn: getProfessionals,
        refetchOnWindowFocus: false,
        staleTime: 30000, // 30 seconds
    });
};

export const useProfessional = (id: string) => {
    return useQuery({
        queryKey: ["professional", id],
        queryFn: () => getProfessionalById(id),
        enabled: !!id,
    });
};

export const useCreateProfessional = () => {
    const queryClient = useQueryClient();
    const { toast } = useToast();

    return useMutation({
        mutationFn: (payload: ProfessionalCreatePayload) =>
            createProfessional(payload),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["professionals"] });
            toast({
                title: "Succès",
                description: "Professionnel créé avec succès",
            });
        },
        onError: (error: Error) => {
            const message = error.message?.toLowerCase() || "";
            let userMessage = "Échec de la création du professionnel";

            if (message.includes("phone") || message.includes("téléphone") || message.includes("telephone")) {
                userMessage = "Format de téléphone invalide. Utilisez: +213XXXXXXXXX (13 caractères)";
            } else if (message.includes("email")) {
                userMessage = "Adresse email invalide ou déjà utilisée";
            } else if (message.includes("network") || message.includes("failed to fetch")) {
                userMessage = "Erreur réseau. Vérifiez votre connexion.";
            } else if (message.includes("session") || message.includes("token") || message.includes("401")) {
                userMessage = "Votre session a expiré. Veuillez vous reconnecter.";
            }

            toast({
                title: "Erreur",
                description: userMessage,
                variant: "destructive",
            });
        },
    });
};

export const useUpdateProfessional = () => {
    const queryClient = useQueryClient();
    const { toast } = useToast();

    return useMutation({
        mutationFn: ({ id, payload }: { id: string; payload: ProfessionalUpdatePayload }) =>
            updateProfessional(id, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["professionals"] });
            toast({
                title: "Succès",
                description: "Professionnel modifié avec succès",
            });
        },
        onError: () => {
            toast({
                title: "Erreur",
                description: "Échec de la modification du professionnel",
                variant: "destructive",
            });
        },
    });
};

export const useActivateProfessional = () => {
    const queryClient = useQueryClient();
    const { toast } = useToast();

    return useMutation({
        mutationFn: (id: string) => activateProfessional(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["professionals"] });
            toast({
                title: "Succès",
                description: "Professionnel activé avec succès",
            });
        },
        onError: (error: Error) => {
            const message = error.message?.toLowerCase() || "";
            let userMessage = "Échec de l'activation du professionnel";
            if (message.includes("not found")) {
                userMessage = "Professionnel introuvable.";
            } else if (message.includes("network") || message.includes("failed to fetch")) {
                userMessage = "Erreur réseau. Vérifiez votre connexion.";
            }
            toast({
                title: "Erreur",
                description: userMessage,
                variant: "destructive",
            });
        },
    });
};

export const useDeactivateProfessional = () => {
    const queryClient = useQueryClient();
    const { toast } = useToast();

    return useMutation({
        mutationFn: (id: string) => deactivateProfessional(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["professionals"] });
            toast({
                title: "Succès",
                description: "Professionnel désactivé avec succès",
            });
        },
        onError: (error: Error) => {
            const message = error.message?.toLowerCase() || "";
            let userMessage = "Échec de la désactivation du professionnel";
            if (message.includes("not found")) {
                userMessage = "Professionnel introuvable.";
            } else if (message.includes("network") || message.includes("failed to fetch")) {
                userMessage = "Erreur réseau. Vérifiez votre connexion.";
            }
            toast({
                title: "Erreur",
                description: userMessage,
                variant: "destructive",
            });
        },
    });
};

export const useDeleteProfessional = () => {
    const queryClient = useQueryClient();
    const { toast } = useToast();

    return useMutation({
        mutationFn: (id: string) => deleteProfessional(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["professionals"] });
            toast({
                title: "Succès",
                description: "Professionnel supprimé avec succès",
            });
        },
        onError: (error: Error) => {
            const message = error.message?.toLowerCase() || "";
            let userMessage = "Échec de la suppression du professionnel";
            if (message.includes("not found")) {
                userMessage = "Professionnel introuvable.";
            } else if (message.includes("network") || message.includes("failed to fetch")) {
                userMessage = "Erreur réseau. Vérifiez votre connexion.";
            }
            toast({
                title: "Erreur",
                description: userMessage,
                variant: "destructive",
            });
        },
    });
};
