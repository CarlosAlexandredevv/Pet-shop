import { PeriodSection } from '@/components/period-section';
import { groupAppointmentByPeriod } from '@/utils';
import { AppointmentForm } from '@/components/appointment-form/appointment-form';
import { cn } from '@/lib/utils';
import { prisma } from '@/lib/prisma';
import { APPOINTMENTS_MOCK } from '@/utils';

export default async function Home() {
  const appointment = await prisma.appointment.findMany();

  const periods = groupAppointmentByPeriod(APPOINTMENTS_MOCK);

  return (
    <div className="bg-background-primary p-6">
      <div className="flex items-center justify-between md:mb-8">
        <div>
          <h1 className="text-title-size text-content-primary mb-2">
            Sua Agenda
          </h1>
          <p className="text-paragraph-medium-size text-content-secondary">
            Aqui você pode ver todos os clientes e serviços agendados para hoje.
          </p>
        </div>
      </div>
      <div className="pb-24 md:pb-0">
        {periods.map((period, index) => (
          <PeriodSection key={index} period={period} />
        ))}
      </div>
      <div
        className={cn(
          'fixed bottom-0 left-0 right-0 flex justify-center bg-[#23242C] py-[18px] px-6 md:right-6',
          'md:left-auto md:top-auto md:w-auto md:bg-transparent',
        )}
      >
        <AppointmentForm />
      </div>
    </div>
  );
}
